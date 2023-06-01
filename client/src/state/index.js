import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    reducers: {
        setMentors: (state, action) => {
            state.mentor = action.payload.mentor
        },
        setNotes: (state, action) => {
            state.note = action.payload.note
        },
        setNotifications: (state, action) => {
            state.notification = action.payload.notification
        },
        setLogin: (state, action) => {
            state.status = action.payload.status;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.status = null;
            state.user = null;
            state.token = null;
            state.note = null;
<<<<<<< HEAD
            state.lesson = null;
=======
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
        },
        setReviews: (state, action) => {
            state.review = action.payload.review
        },
        setBlogs: (state, action) => {
            state.blog = action.payload.blog
        },
<<<<<<< HEAD
        setMentor: (state, action) => {
            state.user = action.payload.user;
        },
        setLessons: (state, action) => {
            state.lesson = action.payload.lesson;
        }
=======
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
    }

});

<<<<<<< HEAD
export const { setMentors, setNotes, setNotifications, setLogin, setLogout, setReviews, setBlogs, setMentor, setLessons } =
=======
export const { setMentors, setNotes, setNotifications, setLogin, setLogout, setReviews, setBlogs } =
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
  authSlice.actions;

export default authSlice.reducer;
