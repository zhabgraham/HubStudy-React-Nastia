import express from "express";
import { createNewUser, login, getAllStudents, getStudent, profileStudent } from "../controllers/student.js";
import { verifyToken } from "../middleware/auth.js"

const router = express.Router();

router.get("/", getAllStudents);
router.get('/:id', getStudent);
//router.post('/', createNewUser);
router.post('/login', login)
router.patch('/student/:userId', profileStudent);

export default router;
