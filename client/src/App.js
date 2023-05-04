// import logo from './logo.svg';
// import './App.css';
// import Nav from './Components/main/Nav.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../src/Styles/main/reset.css';
// import '../src/Styles/main/general.css';
// import Main from './Components/main/Main.js';
// import Footer from './Components/main/Footer';

// import { Switch, Route } from 'react-router-dom';

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from "./Components/Home.js";
// import RegistrationPage from "./Components/sign-up/Registration.js";


// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/registration" component={RegistrationPage} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home.js";
import RegistrationPage from "./Components/sign-up/Registration.js";
import RegistrationPageTwo from "./Components/sign-up/RegistrationMentor.js";
import MentorPage from "./Components/mentorSphere/mentor.js";
import BecomeMentor from "./Components/sign-up/RegistrationMentor.js";
import SignIn from "./Components/sign-in/Sign-in-page.js";
import ProfileStudent from "./Components/profile/profileStudent.js";
import SpherePage from "./Components/mentorSphere/sphere.js";
import BlogPage from "./Components/blog/blog.js"
import ProfileStudentRedo from "./Components/profile/profileStudentRedo.js"
import ViewNotes from "./Components/notes/viewNotes.js";
import CreateNotes from "./Components/notes/createNotes.js";
import ProfileMentor from "./Components/profile/profileMentor.js";
import ProfileMentorRedo from "./Components/profile/profileMentorRedo.js";
import ViewReminder from "./Components/reminder/viewReminder.js";
import CreateReminder from "./Components/reminder/createReminder.js";
import FilterMentor from "./Components/mentorSphere/FilterMentors.js";
import TestPage from "./Components/text.js"
import StartStudy from "./Components/startStudy/start.js"


function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={HomePage} />
    //     <Route path="/registration" component={RegistrationPage} />
    //   </Switch>
    // </Router>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
        <Route path="/registration" element={<RegistrationPage/>} />
        <Route path="/mentorship" element={<RegistrationPageTwo/>} />
        <Route path="/student" element={<RegistrationPage/>} />
        <Route path="/mentor-page" element={<MentorPage/>} />
        <Route path="/become-mentor" element={<BecomeMentor/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/profile-student/:userId" element={<ProfileStudent/>} />
        <Route path="/profile-student-redo" element={<ProfileStudentRedo/>} />
        <Route path="/profile-mentor/:userId" element={<ProfileMentor/>} />
        <Route path="/profile-mentor-redo" element={<ProfileMentorRedo/>} />
        <Route path="/sphere" element={<SpherePage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/create-notes" element={<CreateNotes/>} />
        <Route path="/view-notes" element={<ViewNotes/>} />
        <Route path="/view-reminders" element={<ViewReminder/>} />
        <Route path="/create-reminder" element={<CreateReminder/>} />
        <Route path="/start-study/:userId" element={<StartStudy/>} />
        <Route path="/text" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
