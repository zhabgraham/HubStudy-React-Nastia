import mongoose from "mongoose";

const MentorSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        age: {
            type: Number,
            required: true,
        },
        qualification: {
            type: String,
            required: false
        },
        yearOfExpierience: {
            type: Number,
            required: true,
        },
        pricePerLesson: {
            type: Number,
            required: false
        },
        description: {
          type: String,
          required: false,
          max: 300
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 5
        },
        picturePath: {
            type: String,
            default: " "
        },
        country: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        availableOnline: {
            type: Boolean,
            default: true
        },
        bestMentor: {
            type: Boolean,
            default: false
        },
        groupLessons: {
            type: Boolean,
            default: true,
<<<<<<< HEAD
        },
        student: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
        ]
=======
        }
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
    }, {
        toJSON: {
          virtuals: true,
        },
        toObject: {
          virtuals: true
        }
      }
);



MentorSchema.virtual('blogs', {
    ref: 'Blog',
    localField: '_id',
    foreignField: 'mentor',
    justOne: false
  });

<<<<<<< HEAD
  MentorSchema.virtual('lessons', {
    ref: 'Lessons',
    localField: '_id',
    foreignField: 'mentor',
    justOne: false
  });

=======
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d

const Mentor = mongoose.model("Mentor", MentorSchema);

export default Mentor;
