import Student from "../models/Student.js";
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"

export const createNewUser = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            city,
            email,
            password,
            picturePath
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new Student({
            firstName,
            lastName,
            city,
            email,
            password: passwordHash,
            picturePath
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(501).json({error: err.message});
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Student.findOne({email: email });
        if (!user) return res.status(400).json({msg: "User does not exist"});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({msg: "Invadil credentials"});

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const student = await Student.find();
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
};

export const profileStudent = async (req, res) => {
    try {
      const {
<<<<<<< HEAD
            firstName,
            lastName,
            email,
      } = req.body;

      const userId = req.params.userId;

      const updatedUser = await Student.findByIdAndUpdate(userId, {
            firstName,
            lastName,
            email,
      }, { new: true });

=======
        firstName,
            lastName,
            email,
      } = req.body;
      
      const userId = req.params.userId;
  
      const updatedUser = await Student.findByIdAndUpdate(userId, {
        firstName,
            lastName,
            email,
      }, { new: true });
  
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
<<<<<<< HEAD
  };
=======
  };  
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
