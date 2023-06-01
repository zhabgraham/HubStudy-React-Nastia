import mongoose from "mongoose";

const UserQuestionSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const UserQuestion = mongoose.model("UserQuestion", UserQuestionSchema);

export default UserQuestion;
