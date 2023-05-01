import mongoose from "mongoose"

const NotesSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    text: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const Notes = mongoose.model("Notes", NotesSchema);

export default Notes;
