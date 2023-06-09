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
<<<<<<< HEAD
import lessonRoutes from "./routes/lesson.js"
import UserQuestion from "./models/Userquestion.js";
import Mentor from "./models/Mentor.js";
import Blog from "./models/Blog.js";
import chatRoutes from "./routes/chat.js"
=======
import UserQuestion from "./models/Userquestion.js";
import Mentor from "./models/Mentor.js";
import Blog from "./models/Blog.js";
import Student from "./models/Student.js";
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d

import { mentor } from "./data/index.js";
import { review } from "./data/index.js";
import { blog } from "./data/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
<<<<<<< HEAD
export const app = express();
=======
const app = express();
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

<<<<<<< HEAD


=======
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
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
<<<<<<< HEAD
app.post("/student/photo", upload.single('picturePath'),(req, res) => {
=======
app.post("/text", upload.single('image'),(req, res) => {
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
  // Файл успішно завантажений, можна виконати додаткові дії
  res.status(200).send('Файл успішно завантажений');
});

<<<<<<< HEAD
app.use("/chat", chatRoutes);
=======
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
app.use("/mentor", mentorRoutes);
app.use("/userquestion", userQuestionRoutes);
app.use("/student", studentRoutes);
app.use('/blog', blogRoutes);
app.use('/note', noteRoutes);
app.use('/notification', notificationRoutes);
<<<<<<< HEAD
app.use('/lesson', lessonRoutes);

const server = http.createServer(app);
global.io = socketio.listen(server);
global.io.on('connection', WebSockets.connection);
server.listen(PORT);
server.on("listening", () => {
  console.log(`Listening on port:: http://localhost:${PORT}/`)
});
=======
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d

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

<<<<<<< HEAD
=======
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000"
//   }
// });
// io.on('connection', (socket) => {
//   socket.emit('messageFromServer', { data: 'Welcome to the socketio server' });

//   socket.on('messageToServer', (dataFromClient) => {
//     console.log(dataFromClient);
//   });

//   socket.on('newMessageToServer', (msg) => {
//     io.emit('messageToClients', { text: msg.text });
//   });
// });

// server.listen(9000, () => {
//   console.log('Server is listening on port 9000');
// });
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
