import Nav from "../../Components/main/Nav";
import "../../Styles/reminder/reminder.css";
import reminderIcon from "../../img/Нагадування (3).png";
import chatIcon from "../../img/Чат (1).png";
import notesIcon from "../../img/Нотатки (1).png";
import person from "../../img/person.png"
import GetNotifications from "./GetNotifications.js";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const viewReminder = () => {
  return (
    <div className="reminder-bg">
    <div class="nav">
      <Nav></Nav>
    </div>
    <div className="reminder-wrapper">
      <div className="left-side">
        <img src={person}></img>
        <img src={reminderIcon}></img>
        <img src={notesIcon}></img>
        <img src={chatIcon}></img>
      </div>
      <div className="right-side">
        <div className="top-title">
          <h1>Нагадування</h1>
          <Link to="/create-reminder"><button>Створити нагадування</button></Link>
        </div>
        <div className="bottom-content">
          <div className="content-block">
            <GetNotifications />
          </div>
        </div>
      </div>
      </div>
    </div>
   );
}

export default viewReminder;
