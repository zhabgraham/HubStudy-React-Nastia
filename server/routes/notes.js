import express from "express";
import { createNewNoteStudent,
         createNewNoteMentor,
         deleteNote,
         getNotes } from "../controllers/notes.js";
const router = express.Router();

router.get("/", getNotes)
router.post("/student", createNewNoteStudent);
router.post("/mentor", createNewNoteMentor);
router.delete("/", deleteNote)

export default router
