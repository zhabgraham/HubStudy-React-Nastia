import Notes from "../models/Notes.js";
import Student from "../models/Student.js";
import Mentor from "../models/Mentor.js";

export const createNewNoteStudent = async(req, res) => {
    try {
        const { userId, text } = req.body;
<<<<<<< HEAD
        if(!text)
        {
          return res.status(409).json({ message: err.message });
        }
=======
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
        const user = await Student.findById(userId);
        const newNote = new Notes({
          userId,
          firstName: user.firstName,
          lastName: user.lastName,
          text
        });
        const note = await newNote.save();


        res.status(201).json(note);
      } catch (err) {
        res.status(409).json({ message: err.message });
      }
}

export const createNewNoteMentor = async(req, res) => {
  try {
      const { userId, text } = req.body;
      const user = await Mentor.findById(userId);
      const newNote = new Notes({
        userId,
        firstName: user.firstName,
        lastName: user.lastName,
        text
      });
      const note = await newNote.save();


<<<<<<< HEAD
      res.status(200).json(note);
=======
      res.status(201).json(note);
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
}

export const getNotes = async (req, res) => {
  try {
    let query;
    const reqQuery = {...req.query};

    query = Notes.find(reqQuery);

    const note = await query;
    res.status(200).json(note);
  } catch (err) {
      res.status(404).json({message: err.message});
  }
};

export const deleteNote = async (req, res) => {
  const { noteId, text } = req.body
  const notes = await Notes.findByIdAndDelete( noteId , {
      new: true,
      runValidators: true
  });

  res.status(200).json({success: true, note: notes});
}
