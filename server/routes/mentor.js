import express from "express";
import { getAllMentors,
         getFilterMentors,
         getMentor,
         createNewMentor,
         newStudent,
         login,} from "../controllers/mentor.js";

const router = express.Router();

router.get("/", getFilterMentors);
router.post("/", createNewMentor)
router.post("/login", login);
router.get('/:id', getMentor);
router.put('/', newStudent)

export default router
