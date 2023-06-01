import Message from "../models/Message.js";
import Chat from "../models/Chat.js";
import jwt  from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { getStudent } from "../controllers/student.js";
import { getMentor } from "../controllers/mentor.js";

export default {
  initiate: async (req, res) => {
    try {
      const { studentIds, mentorIds, type } = req.body;
      const { userId: chatInitiator } = req;
      const allUserIds = [...studentIds, ...mentorIds, chatInitiator];
      const chatRoom = await Chat.initiateChat(allUserIds, type, chatInitiator);
      return res.status(200).json({ success: true, chatRoom });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  },
  
  postMessage: async (req, res) => {
    try {
      const { chatId } = req.params;
      const messagePayload = {
        messageText: req.body.messageText,
      };
      const currentLoggedUser = req.userId;
      const post = await Message.createPostInChatRoom(chatId, messagePayload, currentLoggedUser);
      global.io.sockets.in(chatId).emit('new message', { message: post });
      return res.status(200).json({ success: true, post });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  },
  getRecentConversation: async (req, res) => {
    try {
      const currentLoggedUser = req.userId;
      const options = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10,
      };
      const chats = await Chat.getChatRoomsByUserId(currentLoggedUser);
      const chatIds = chats.map(chat => chat._id);
      const recentConversation = await Message.getRecentConversation(chatIds, options, currentLoggedUser);
      return res.status(200).json({ success: true, conversation: recentConversation });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  },
  getConversationByRoomId: async (req, res) => {
    try {
      const { chatId } = req.params;
      const chat = await Chat.getChatRoomByRoomId(chatId);
      if (!chat) {
        return res.status(400).json({
          success: false,
          message: 'No chat exists for this id',
        });
      }
      const students = await getStudent(chat.studentIds);
      const mentors = await getMentor(chat.mentorIds);
      const options = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10,
      };
      const conversation = await Message.getConversationByRoomId(chatId, options);
      return res.status(200).json({
        success: true,
        conversation,
        students,
        mentors
      });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  },
  markConversationReadByRoomId: async (req, res) => {
    try {
      const { chatId } = req.params;
      const chat = await Chat.getChatRoomByRoomId(chatId);
      if (!chat) {
        return res.status(400).json({
          success: false,
          message: 'No room exists for this id',
        });
      }

      const currentLoggedUser = req.userId;
      const result = await Message.markMessageRead(chatId, currentLoggedUser);
      return res.status(200).json({ success: true, data: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error });
    }
  },
  deleteRoomById: async (req, res) => {
    try {
      const { chatId } = req.params;
      const chat = await Chat.remove({ _id: chatId });
      const messages = await Message.remove({ chatRoomId: chatId })
      return res.status(200).json({ 
        success: true, 
        message: "Operation performed succesfully",
        deletedRoomsCount: chat.deletedCount,
        deletedMessagesCount: messages.deletedCount,
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error })
    }
  },
  deleteMessageById: async (req, res) => {
    try {
      const { messageId } = req.params;
      const message = await Message.remove({ _id: messageId });
      return res.status(200).json({ 
        success: true, 
        deletedMessagesCount: message.deletedCount,
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error })
    }
  },
  
};  


