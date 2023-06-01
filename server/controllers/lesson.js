import Lesson from "../models/Lesson.js";
import Mentor from "../models/Mentor.js";

export const createNewLesson = async(req, res) => {
    try {
        const { mentor,
                student,
                price,
                location,
                date,
                duration,
                sphere } = req.body;

        const newLesson = new Lesson({
                mentor,
                student,
                price,
                location,
                date,
                duration,
                sphere
        });

        const lesson = await newLesson.save();
        res.status(201).json(lesson);
    } catch (err) {
        res.status(409).json({error: err.message});
    }
}

export const updateLesson = async(req, res) => {
    const lesson = await Lesson.findByIdAndUpdate(req.params.id, {finished: true})

    res.status(200).json(lesson);
}

export const getLessons = async (req, res) => {
    try {
        let query;
        const reqQuery = {...req.query};

        const removeFields = ['select', 'sort', 'page', 'limit'];
        removeFields.forEach(param => delete reqQuery[param]);

        let queryStr = JSON.stringify(reqQuery);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
        query = Lesson.find(JSON.parse(queryStr)).populate('mentor');

        const lessons = await query;
        res.status(200).json(lessons);


    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const deleteLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findByIdAndDelete(req.params.id);
        if(lesson)
            res.status(200).json({success: true});
        else
            res.status(404).json({success: false})
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
