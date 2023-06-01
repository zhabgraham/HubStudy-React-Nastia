import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import http from "http"
import { Server } from 'socket.io';
import { fileURLToPath } from "url";
import { createNewUser } from "./controllers/student.js";
import mentorRoutes from "./routes/mentor.js";
import studentRoutes from "./routes/student.js";
import blogRoutes from "./routes/blog.js";
import userQuestionRoutes from "./routes/userquestion.js";
import noteRoutes from "./routes/notes.js"
import notificationRoutes from "./routes/notification.js"
import lessonRoutes from "./routes/lesson.js"
import UserQuestion from "./models/Userquestion.js";
import Mentor from "./models/Mentor.js";
import Blog from "./models/Blog.js";
import chatRoutes from "./routes/chat.js"

import { mentor } from "./data/index.js";
import { review } from "./data/index.js";
import { blog } from "./data/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
export const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));



// FILE STORAGE

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, "public/assets");
  },
  filename: function(req, file, cb) {
      console.log(file)
      cb(null, file.originalname);
  }
});

const upload = multer({storage: storage});



app.post("/student/register", upload.single('picturePath'), createNewUser)
app.post("/student/photo", upload.single('picturePath'),(req, res) => {
  // Файл успішно завантажений, можна виконати додаткові дії
  res.status(200).send('Файл успішно завантажений');
});

app.use("/chat", chatRoutes);
app.use("/mentor", mentorRoutes);
app.use("/userquestion", userQuestionRoutes);
app.use("/student", studentRoutes);
app.use('/blog', blogRoutes);
app.use('/note', noteRoutes);
app.use('/notification', notificationRoutes);
app.use('/lesson', lessonRoutes);

const server = http.createServer(app);
global.io = socketio.listen(server);
global.io.on('connection', WebSockets.connection);
server.listen(PORT);
server.on("listening", () => {
  console.log(`Listening on port:: http://localhost:${PORT}/`)
});

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    //Mentor.insertMany(mentor);
   //Review.insertMany(review);
   //Blog.insertMany(blog);
  })
  .catch((error) => console.log(`${error} did not connect`));

