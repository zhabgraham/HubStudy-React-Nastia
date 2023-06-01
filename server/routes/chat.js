import express from 'express';
import { getRecentConversation,
         getConversationByRoomId,
         initiate,
         postMessage,
         markConversationReadByRoomId,
         deleteRoomById,
         deleteMessageById } from '../controllers/chat.js';

const router = express.Router();

router
  .get('/', getRecentConversation)
  .get('/:chatId', getConversationByRoomId)
  .post('/initiate', initiate)
  .post('/:chatId/message', postMessage)
  .put('/:chatId/mark-read', markConversationReadByRoomId)
  .delete('/chat/:chatId', deleteRoomById)
  .delete('/message/:messageId', deleteMessageById)

export default router;