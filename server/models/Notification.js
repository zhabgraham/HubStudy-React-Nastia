import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
    CreatorId: {
        type: String
    },
    recieverId: {
        type: String
    },
    creatorFirstName: {
        type: String
    },
    creatorLastName: {
        type: String
    },
    recieverFirstName: {
        type: String
    },
    recieverLastName: {
        type: String
    },
    theme: {
        type: String
    },
    text: {
        type: String,
        required: true
    },
    timeEnd: {
        type: Date,
    }
},
    { timestamps: true }
)

const Notifications = mongoose.model("Notifications", NotificationSchema);

export default Notifications;
