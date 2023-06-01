import express from "express";
import { getAllMentors,
         getFilterMentors,
         getMentor,
         createNewMentor,
<<<<<<< HEAD
         newStudent,
         login,} from "../controllers/mentor.js";
=======
         login, } from "../controllers/mentor.js";
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d

const router = express.Router();

router.get("/", getFilterMentors);
router.post("/", createNewMentor)
router.post("/login", login);
router.get('/:id', getMentor);
<<<<<<< HEAD
router.put('/', newStudent)

=======
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
export default router
