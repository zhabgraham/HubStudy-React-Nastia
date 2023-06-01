import express from "express";
import { createNewUser, login, getAllStudents, getStudent, profileStudent } from "../controllers/student.js";
import { verifyToken } from "../middleware/auth.js"

const router = express.Router();

router.get("/", getAllStudents);
router.get('/:id', getStudent);
//router.post('/', createNewUser);
router.post('/login', login)
<<<<<<< HEAD
router.patch('/student/:userId', profileStudent);
=======
router.patch('/:userId', profileStudent);
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d

export default router;
