import mongoose from "mongoose"

const LessonSchema = new mongoose.Schema({
    mentor: {
        type: mongoose.Schema.ObjectId,
        ref: 'Mentor',
        //required: 'true'
    },
    student: {
        type: mongoose.Schema.ObjectId,
        ref: 'Student',
        //required: true
    },
    location: {
        type: String
    },
    alone: {
        type: Boolean,
        default: true
    },
    timesPerWeek: {
        type: Number,
    },
    date: {
        type: Date
    },
    duration: {
        type: Number,
    },
    price: {
        type: Number,
    },
    finished: {
        type: Boolean,
        default: false
    },
    started:{
        type: Boolean,
        default: false
    },
    sphere: {
        type: String
    }
}, {timestamps: true} )


const Lesson = mongoose.model("Lesson", LessonSchema);

export default Lesson;
