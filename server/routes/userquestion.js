import express from "express";
import { getAllUserQuestions, createNewUserQuestion } from "../controllers/userquestion.js";

const router = express.Router();

router.get('/', getAllUserQuestions);

router.post('/', createNewUserQuestion);

export default router;
