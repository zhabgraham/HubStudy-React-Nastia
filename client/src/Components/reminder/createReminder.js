import Nav from "../../Components/main/Nav";
import "../../Styles/reminder/reminder.css";
import reminderIcon from "../../img/Нагадування (3).png";
import chatIcon from "../../img/Чат (1).png";
import notesIcon from "../../img/Нотатки (1).png";
import person from "../../img/person.png"

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useSelector } from "react-redux";

const initialValues = {
  recieverId: "",
  theme: "",
  text: "",
  timeEnd: ""
}



const CreateReminder = () => {

  const user = useSelector((state) => state.user);
  const userId = user._id;

  const [formData, updateFormData] = useState(initialValues);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  formData.recieverId = userId;

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData);

    const mentorResponse = await axios.post('http://localhost:3001/notification/mentor', formData)
    .then(function (response) {
      console.log(response);
      console.log(formData);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(formData);

    const studentResponse = await axios.post('http://localhost:3001/notification/student', formData)
    .then(function (response) {
      console.log(response);
      console.log(formData);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(formData);
  };



  return (
    <div className="reminder-bg">
      <div className="nav">
      <Nav></Nav>
      </div>
<div className="createReminder-wrapper">

       <div className="left-side">
        <img src={person}></img>
        <img src={reminderIcon}></img>
        <img src={notesIcon}></img>
        <img src={chatIcon}></img>
      </div>

      <div className="right-side">
        <div className="top-title">
          <h1>Нагадування</h1>
        </div>
        <div className="bottom-content">
          <div className="content-create">
            <div className="inform">
              <h2>Сповістити мене:</h2>
              <input onChange={handleChange} name="timeEnd" type="date" id="date"></input>
            </div>
            <div className="theme">
            <h2>Тема:</h2>
              <input onChange={handleChange} name="theme" type="text" id="theme"></input>
            </div>
            <div className="details">
              <h2>
              Деталі:
              </h2>
              <textarea onChange={handleChange} name="text" id="details" rows={10} cols={10} wrap="soft"></textarea>
            </div>
            <button type="submit" onClick={handleSubmit}>Відправити</button>
          </div>
        </div>
      </div>
    </div>
    </div>

   );
}

export default CreateReminder;
