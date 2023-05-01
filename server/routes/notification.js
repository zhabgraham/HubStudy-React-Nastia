import express from "express";
import { createNewNotificationMentor,
         createNewNotificationStudent,
         getNotification } from "../controllers/notification.js";

const router = express.Router();

router.get('/', getNotification)
router.post("/mentor", createNewNotificationMentor)
router.post("/student", createNewNotificationStudent)

export default router
