import Student from "../models/Student.js";
import Mentor from "../models/Mentor.js";
import Notifications from "../models/notification.js";

export const createNewNotificationMentor = async(req, res) => {
    try {
        const { recieverId, text, theme, timeEnd } = req.body;
        const user = await Mentor.findById(recieverId);
        const newNotification = new Notifications({
          recieverId,
          recieverFirstName: user.firstName,
          recieverLastName: user.lastName,
          text,
          theme,
          timeEnd
        });
        const notification = await newNotification.save();


        res.status(201).json(notification);
      } catch (err) {
        res.status(409).json({ message: err.message });
      }
}

export const createNewNotificationStudent = async(req, res) => {
  try {
      const { recieverId, text, theme, timeEnd } = req.body;
      const user = await Student.findById(recieverId);
      const newNotification = new Notifications({
        recieverId,
        recieverFirstName: user.firstName,
        recieverLastName: user.lastName,
        text,
        theme,
        timeEnd
      });
      const notification = await newNotification.save();


      res.status(201).json(notification);
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
}


export const getNotification = async (req, res) => {
    try {
      let query;
      const reqQuery = {...req.query};

      query = Notifications.find(reqQuery);

      const note = await query;
      res.status(200).json(note);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
  };
