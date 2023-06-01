import express  from "express";
import { createNewLesson, updateLesson, getLessons, deleteLesson } from "../controllers/lesson.js";
const router = express.Router();

router.get('/', getLessons)
router.delete('/:id', deleteLesson)
router.post('/', createNewLesson);
router.put('/:id', updateLesson)

export default router;
