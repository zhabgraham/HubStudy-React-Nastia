import Mentor from "../models/Mentor.js";
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"

export const getAllMentors = async (req, res) => {
  try {
      const mentor = await Mentor.find();
      res.status(200).json(mentor);
  } catch (error) {
      res.status(404).json({message: error.message});
  }
}

export const getAllMentor = async (req, res) => {
    try {
        const mentor = await Mentor.findById(req.params.id);
        res.status(200).json(mentor);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
  }

export const getFilterMentors = async (req, res) => {
    try {
        // filter
        let query;
        const reqQuery = {...req.query};

        const removeFields = ['select', 'sort', 'page', 'limit'];
        removeFields.forEach(param => delete reqQuery[param]);

        let queryStr = JSON.stringify(reqQuery);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
        query = Mentor.find(JSON.parse(queryStr));

        //pagination
        const page = parseInt(req.query.page, 10) || 1;
        const limit = 5;
        const startIndex = (page - 1) * limit;

        query = query.skip(startIndex).limit(limit);



        const mentor = await query;
        res.status(200).json(mentor);


    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createNewMentor = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            city,
            email,
            qualification,
            password,
            age,
            yearOfExpierience
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUserMentor = new Mentor({
            firstName,
            lastName,
            city,
            email,
            qualification,
            password: passwordHash,
            age,
            yearOfExpierience
        });

        const savedUser = await newUserMentor.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(501).json({error: err.message});
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Mentor.findOne({email: email });
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

export const getMentor = async (req, res) => {
    try {
        const { id } = req.params;
        const mentor = await Mentor.findById(id);
        res.status(200).json(mentor);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
};
