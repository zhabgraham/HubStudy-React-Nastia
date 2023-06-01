import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
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
        city: {
            type: String,
            required: true
        },
        picturePath: {
            type: String
<<<<<<< HEAD
        },

    },
    {
        toJSON: {
          virtuals: true,
        },
        toObject: {
          virtuals: true
        }
      }
=======
        }
    }
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
)

StudentSchema.virtual('note', {
    ref: 'Notes',
    localField: '_id',
    foreignField: 'user',
    justOne: false
  });

<<<<<<< HEAD
StudentSchema.virtual('lessons', {
    ref: 'Lessons',
    localField: '_id',
    foreignField: 'student',
    justOne: false
  });

  StudentSchema.virtual('mentors', {
    ref: 'Mentor',
    localField: '_id',
    foreignField: 'student',
    justOne: false
  });
=======
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
const Student = mongoose.model("Student", StudentSchema);

export default Student;
