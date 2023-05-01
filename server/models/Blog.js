import mongoose from "mongoose"

const BlogSchema = new mongoose.Schema({
    mentor: {
        type: mongoose.Schema.ObjectId,
        ref: 'Mentor',
        required: 'true'
    },
    firstName: {
        type: mongoose.Schema.ObjectId,
        ref: 'Mentor'
    },
    text: {
        type: String,
        required: true
    }
})

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
