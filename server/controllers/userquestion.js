import UserQuestion from "../models/Userquestion.js";

export const getAllUserQuestions = async (req, res) => {
    try {
        const userQuestion = await UserQuestion.find();
        res.status(200).json(userQuestion);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createNewUserQuestion = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            phoneNumber,
            email,
            text
        } = req.body;

        const newUserQuestion = new UserQuestion({
            firstName,
            lastName,
            phoneNumber,
            email,
            text
        });

        const savedUserQuestion = await newUserQuestion.save();
        res.status(201).json(savedUserQuestion);
    } catch (err) {
        res.status(501).json({error: err.message});
    }
}
