import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const MESSAGE_TYPES = {
  TYPE_TEXT: "text",
};

const readByRecipientSchema = new mongoose.Schema(
  {
    _id: false,
    readByUserId: String,
    readAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: false,
  }
);

const MessageSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    chatRoomId: String,
    message: mongoose.Schema.Types.Mixed,
    type: {
      type: String,
      default: () => MESSAGE_TYPES.TYPE_TEXT,
    },
    postedByStudent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
    postedByMentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mentor',
    },
    readByRecipients: [readByRecipientSchema],
  },
  {
    timestamps: true,
    collection: "chatmessages",
  }
);

/**
 * This method will create a post in chat
 * 
 * @param {String} roomId - id of chat room
 * @param {Object} message - message you want to post in the chat room
 * @param {String} postedByStudent - ID of the student who is posting the message
 * @param {String} postedByMentor - ID of the mentor who is posting the message
 */
MessageSchema.statics.createPostInChatRoom = async function (chatRoomId, message, postedByStudent, postedByMentor) {
  try {
    const post = await this.create({
      chatRoomId,
      message,
      postedByStudent,
      postedByMentor,
      readByRecipients: [],
    });
    const aggregate = await this.aggregate([
      // Get the post where _id = post._id
      { $match: { _id: post._id } },

      {
        $lookup: {
          from: 'students',
          localField: 'postedByStudent',
          foreignField: '_id',
          as: 'postedByStudent',
        },
      },
      { $unwind: '$postedByStudent' },

      {
        $lookup: {
          from: 'mentors',
          localField: 'postedByMentor',
          foreignField: '_id',
          as: 'postedByMentor',
        },
      },
      { $unwind: '$postedByMentor' },

      {
        $lookup: {
          from: 'chatrooms',
          localField: 'chatRoomId',
          foreignField: '_id',
          as: 'chatRoomInfo',
        },
      },
      { $unwind: '$chatRoomInfo' },
      { $unwind: '$chatRoomInfo.studentIds' },
      { $unwind: '$chatRoomInfo.mentorIds' },

      {
        $lookup: {
          from: 'students',
          localField: 'chatRoomInfo.studentIds',
          foreignField: '_id',
          as: 'chatRoomInfo.studentProfiles',
        },
      },

      {
        $lookup: {
          from: 'mentors',
          localField: 'chatRoomInfo.mentorIds',
          foreignField: '_id',
          as: 'chatRoomInfo.mentorProfiles',
        },
      },
      // Group the data
      {
        $group: {
          _id: '$chatRoomInfo._id',
          postId: { $last: '$_id' },
          chatRoomId: { $last: '$chatRoomInfo._id' },
          message: { $last: '$message' },
          type: { $last: '$type' },
          postedByStudent: { $last: '$postedByStudent' },
          postedByMentor: { $last: '$postedByMentor' },
          readByRecipients: { $last: '$readByRecipients' },
          chatRoomInfo: {
            $addToSet: {
              $cond: [
                { $gt: ['$chatRoomInfo.studentIds', '$chatRoomInfo.mentorIds'] },
                { $arrayElemAt: ['$chatRoomInfo.studentProfiles', 0] },
                { $arrayElemAt: ['$chatRoomInfo.mentorProfiles', 0] },
              ],
            },
          },
          createdAt: { $last: '$createdAt' },
          updatedAt: { $last: '$updatedAt' },
        },
      },
    ]);
    return aggregate[0];
  } catch (error) {
    throw error;
  }
};

/**
 * @param {String} chatRoomId - chat room id
 */
MessageSchema.statics.getConversationByRoomId = async function (chatRoomId, options = {}) {
  try {
    return this.aggregate([
      { $match: { chatRoomId } },
      { $sort: { createdAt: -1 } },

      {
        $lookup: {
          from: 'students',
          localField: 'postedByStudent',
          foreignField: '_id',
          as: 'postedByStudent',
        },
      },
      { $unwind: "$postedByStudent" },

      {
        $lookup: {
          from: 'mentors',
          localField: 'postedByMentor',
          foreignField: '_id',
          as: 'postedByMentor',
        },
      },
      { $unwind: "$postedByMentor" },
      // Apply pagination
      { $skip: options.page * options.limit },
      { $limit: options.limit },
      { $sort: { createdAt: 1 } },
    ]);
  } catch (error) {
    throw error;
  }
};

/**
 * @param {String} chatRoomId - chat room id
 * @param {String} currentUserOnlineId - user id (either student or mentor)
 */
MessageSchema.statics.markMessageRead = async function (chatRoomId, currentUserOnlineId) {
  try {
    return this.updateMany(
      {
        chatRoomId,
        'readByRecipients.readByUserId': { $ne: currentUserOnlineId },
      },
      {
        $addToSet: {
          readByRecipients: { readByUserId: currentUserOnlineId },
        },
      },
      {
        multi: true,
      }
    );
  } catch (error) {
    throw error;
  }
};

/**
 * @param {Array} chatRoomIds - chat room ids
 * @param {{ page, limit }} options - pagination options
 * @param {String} currentUserOnlineId - user id (either student or mentor)
 */
MessageSchema.statics.getRecentConversation = async function (chatRoomIds, options, currentUserOnlineId) {
  try {
    return this.aggregate([
      { $match: { chatRoomId: { $in: chatRoomIds } } },
      { $sort: { createdAt: -1 } },

      {
        $lookup: {
          from: 'students',
          localField: 'postedByStudent',
          foreignField: '_id',
          as: 'postedByStudent',
        },
      },
      { $unwind: "$postedByStudent" },

      {
        $lookup: {
          from: 'mentors',
          localField: 'postedByMentor',
          foreignField: '_id',
          as: 'postedByMentor',
        },
      },
      { $unwind: "$postedByMentor" },
      // Apply pagination
      { $skip: options.page * options.limit },
      { $limit: options.limit },
      { $sort: { createdAt: 1 } },
    ]);
  } catch (error) {
    throw error;
  }
};

const Message = mongoose.model("Message", MessageSchema);

export default Message;