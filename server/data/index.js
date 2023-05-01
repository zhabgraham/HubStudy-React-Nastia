import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const mentor = [
    {
        _id: userIds[0],
        firstName: "Joe",
        lastName: "Biden",
        age: 75,
        qualification: "President",
        yearOfExpierience: 55,
        pricePerLesson: 7000,
        description: "senior at the Softserve IT - company C# and C++ developer international students group",
        email: "aaaaaaa@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        country: "USA",
        city: "Washington",
        availableOnline: true
    },
    {
        _id: userIds[1],
        firstName: "Ivan",
        lastName: "Petro",
        age: 75,
        qualification: "Backend",
        yearOfExpierience: 5,
        pricePerLesson: 1200,
        description: "I`m only human",
        email: "aagfgfbfgaaaaa@gmail.com",
        password: "$3b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        country: "Ukraine",
        city: "Lviv",
        groupLessons: true
    },
    {
        _id: userIds[2],
        firstName: "Maksym",
        lastName: "Idk",
        age: 37,
        qualification: "Fullstack",
        yearOfExpierience: 1,
        pricePerLesson: 400,
        description: "Some description",
        email: "aagfgfbfgaaa5546aa@gmail.com",
        password: "$4b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        country: "France",
        city: "Lviv",
        bestMentor: true,
    },
    {
        _id: userIds[3],
        firstName: "Ivan",
        lastName: "Fjfkdg",
        age: 37,
        qualification: "Fullstack",
        yearOfExpierience: 9,
        pricePerLesson: 950,
        description: "Another description here",
        email: "aagfgfb3213fgaaa5546aa@gmail.com",
        password: "$5b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        country: "France",
        city: "Lviv",
        bestMentor: true,
        groupLessons: true
    }
]

export const review = [
    {
        firstName: "Sanya",
        lastName: "Pggfh",
        text: "The best design ever"
    },
    {
        firstName: "Sanya",
        lastName: "Pggfh",
        text: "The best platform what i ever seen"
    },
    {
        firstName: "Jan",
        lastName: "Falk",
        text: "Våvinde. E-demokrati. Sudoku. Den nya ekonomin. Monoligt. Sust. "
    },
    {
        firstName: "Annika",
        lastName: "Lind",
        text: "Just text"
    },
    {
        firstName: "Jan",
        lastName: "Falk",
        text: "Våvinde. E-demokrati. Sudoku. Den nya ekonomin. Monoligt. Sust. "
    },
    {
        firstName: "Jan",
        lastName: "Falk",
        text: "Våvinde. E-demokrati. Sudoku. Den nya ekonomin. Monoligt. Sust. "
    },
    {
        firstName: "Jan",
        lastName: "Falk",
        text: "Våvinde. E-demokrati. Sudoku. Den nya ekonomin. Monoligt. Sust. "
    },
    {
        firstName: "Jan",
        lastName: "Falk",
        text: "Våvinde. E-demokrati. Sudoku. Den nya ekonomin. Monoligt. Sust. "
    },
]

export const blog = [

    {
        mentor: "64343ab14dc32790de9a5940",
        text: "dfsgdshf",

    }
]
