import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

export const USER_TYPES = {
    MENTOR: "mentor",
    STUDENT: "student",
  };

export const CHAT_ROOM_TYPES = {
  CONSUMER_TO_CONSUMER: "consumer-to-consumer",
};

const ChatSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    studentIds: [String],
    mentorIds: [String],
    type: String,
    chatInitiator: String,
  },
  {
    timestamps: true,
    collection: "chatrooms",
  }
);

/**
 * @param {String} userId - ID of the user
 * @return {Array} Array of all chat rooms that the user belongs to
 */
ChatSchema.statics.getChatRoomsByUserId = async function (userId) {
  try {
    const rooms = await this.find({
      $or: [{ studentIds: userId }, { mentorIds: userId }],
    });
    return rooms;
  } catch (error) {
    throw error;
  }
}

/**
 * @param {String} chatId - ID of the chat room
 * @return {Object} Chat room
 */
ChatSchema.statics.getChatRoomByRoomId = async function (chatId) {
  try {
    const room = await this.findOne({ _id: chatId });
    return room;
  } catch (error) {
    throw error;
  }
}

/**
 * @param {Array} studentIds - Array of student IDs
 * @param {Array} mentorIds - Array of mentor IDs
 * @param {String} chatInitiator - User who initiated the chat
 * @param {String} type - Chat room type
 */
ChatSchema.statics.initiateChat = async function (
  studentIds,
  mentorIds,
  chatInitiator,
  type
) {
  try {
    const availableRoom = await this.findOne({
      studentIds: { $all: studentIds },
      mentorIds: { $all: mentorIds },
      type,
    });
    if (availableRoom) {
      return {
        isNew: false,
        message: 'Retrieving an old chat room',
        chatRoomId: availableRoom._id,
        type: availableRoom.type,
      };
    }

    const newRoom = await this.create({
      studentIds,
      mentorIds,
      chatInitiator,
      type,
    });
    return {
      isNew: true,
      message: 'Creating a new chat room',
      chatRoomId: newRoom._id,
      type: newRoom.type,
    };
  } catch (error) {
    console.log('Error on initiateChat method', error);
    throw error;
  }
}

export default mongoose.model('Chat', ChatSchema);
