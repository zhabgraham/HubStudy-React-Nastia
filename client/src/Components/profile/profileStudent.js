import Nav from "../main/Nav";
import '../../Styles/main/reset.css';
import '../../Styles/main/general.css';
import '../../Styles/profile/profileStudent.css';
import photoStudent from "../../img/profileStudent.png";
import reminderIcon from "../../img/reminder-icon.png";
import notesIcon from "../../img/notes-icon.png";
import chatIcon from "../../img/chat-icon.png";
import swimming from "../../img/swimming.png";
import axios from "axios"

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';


const initialValues = {
  firstName: "",
  lastName: "",
  email: ""
}


const ProfileStudent = () => {
  const [user, setUser] = useState(initialValues);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const getUser = async () => {
    const studentResponse = await axios.get(`http://localhost:3001/student/${userId}`)
    .then(function (response) {
        const data = response.data;
        setUser(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //getUser();
  const {
    firstName,
    lastName,
    email
  } = user;

  return (
    <div className="container-profileStudent">
      <Nav></Nav>
      <div className="under-header">
        <div>
          <div className="nameSurname">
            <div>
              <h2 className="nameStudent">{firstName}</h2>
            </div>
            <div>
              <h2 className="surnameStudent">{lastName}</h2>
            </div>
          </div>
          <div>
            <p>Студент</p>
          </div>
        </div>
        <div>
          <Link to="/profile-student-redo">
            <button className="changeProfile">Редагувати профіль</button>
          </Link>
        </div>
      </div>
      <div class="main-profileStudent">
        <div className="sidebar">
          <div className="photoStudent">
            <img className="photoStudent-photo" width={300} src={photoStudent} ></img>
          </div>
          <div className="content-sidebar">
            <div className="function-block">
              <div className="function-btn">
                Функції
              </div>
              <div className="function">
                <Link to="/view-reminders">
                  <div className="reminder-profile">
                    <img width={30} src={reminderIcon} ></img>
                    <p>Нагадування</p>
                  </div>
                </Link>
                <Link to="/view-notes">
                  <button className="notes-profile">
                  <img width={30} src={notesIcon} ></img>
                    <p>Нотатки</p>
                  </button>
                </Link>
                <div className="chat-profile">
                <img width={30} src={chatIcon} ></img>
                  <p>Чат</p>
                </div>
              </div>
            </div>
            <div className="contact-student">
              <div className="contactStudent-btn">Контакти</div>
              <div>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mainSection-student">
          <div className="sections-profile">
            <div className="myLessons-student">
              <div className="myLessons-btn">Мої заняття</div>
              <div className="block-lessons">
                <div className="item-lessons">
                  <div className="photo-lesson">
                    <img src={swimming} ></img>
                  </div>
                  <div className="about-lesson">
                    <div>
                      <h2 className="title-lesson">Підготовка до спортивних змагань:</h2>
                    </div>
                    <div>
                      <p className="description-lesson">Змагання на носі, а ви не знаєте як до них підготуватись?</p>
                    </div>
                    <div className="durationPrice">
                      <div>
                        <p>Ціна заняття:</p>
                        <p>350 грн</p>
                      </div>
                      <div>
                        <p>Тривалість заняття:</p>
                        <p>1,5 год</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-lessons">
                  <div className="photo-lesson">
                    <img src={swimming} ></img>
                  </div>
                  <div className="about-lesson">
                    <div>
                      <h2 className="title-lesson">Підготовка до спортивних змагань:</h2>
                    </div>
                    <div>
                      <p className="description-lesson">Змагання на носі, а ви не знаєте як до них підготуватись?</p>
                    </div>
                    <div className="durationPrice">
                      <div>
                        <p>Ціна заняття:</p>
                        <p>350 грн</p>
                      </div>
                      <div>
                        <p>Тривалість заняття:</p>
                        <p>1,5 год</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mytasks-student">
              <div className="myLessons-btn">Завдання:</div>
              <div className="block-tasks">
                <div class="item-tasks">
                  <div>
                    <p>Тести:</p>
                    <a href="http://yourtesturl.com">http://yourtesturl.com </a>
                  </div>
                  <div>
                    <p>Відео:</p>
                    <a href="https://youtu.be/6SjBv5AuL8E">https://youtu.be/6SjBv5AuL8E</a>
                  </div>
                  <div>
                    <p>Тести:</p>
                    <a href="http://yourmanualurl.com" >http://yourmanualurl.com </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default ProfileStudent;
