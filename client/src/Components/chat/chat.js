import Nav from "../../Components/main/Nav";
import "../../Styles/reminder/reminder.css";
import reminderIcon from "../../img/Нагадування (3).png";
import chatIcon from "../../img/Чат (1).png";
import notesIcon from "../../img/Нотатки (1).png";
import person from "../../img/person.png";
import "../../Components/chat/chat.css";
import axios from "axios";
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {uniqBy} from "lodash";
import telephone from "../../img/tel.png";
import camera from "../../img/camera.png";
import send from "../../img/send.png";


const Chat = () => {

  return ( 
    <div className="chat-page">
     <div className="chat-bg reminder-bg">
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
        <div className="chat-content">
          <div className="left-chat">
            <div className="listOfUsers">
            <button>
                <div className="user-item">
                  <img src={person} ></img>
                  <p className="username-chat">Абра Кадабра</p>
                </div>
              </button>
              <button>
                <div className="user-item">
                  <img src={person} ></img>
                  <p className="username-chat">Абра Кадабра</p>
                </div>
              </button>
              <button>
                <div className="user-item">
                  <img src={person} ></img>
                  <p className="username-chat">Абра Кадабра</p>
                </div>
              </button>
              <button>
                <div className="user-item">
                  <img src={person} ></img>
                  <p className="username-chat">Абра Кадабра</p>
                </div>
              </button>
              <button>
                <div className="user-item">
                  <img src={person} ></img>
                  <p className="username-chat">Абра Кадабра</p>
                </div>
              </button>
              <button>
                <div className="user-item">
                  <img src={person} ></img>
                  <p className="username-chat">Абра Кадабра</p>
                </div>
              </button>
              <button>
                <div className="user-item">
                  <img src={person} ></img>
                  <p className="username-chat">Абра Кадабра</p>
                </div>
              </button>
              <button>
                <div className="user-item">
                  <img src={person} ></img>
                  <p className="username-chat">Абра Кадабра</p>
                </div>
              </button>
              <button>
                <div className="user-item">
                  <img src={person} ></img>
                  <p className="username-chat">Абра Кадабра</p>
                </div>
              </button>
            </div>
          </div>
          <div className="right-chat">
            <div className="top-right-chat">
              <div>
                <img src={person}></img>
                <div className="description-user-item">
                  <p>Qwerty</p>
                  <p>last seen - 23:59</p>
                </div>
              </div>
              <div>
                <button><img src={telephone}></img></button>
                <button><img src={camera}></img></button>
              </div>
            </div>
            <div className="message-chat">
              {/* <div className="from-username">
                <div className="message-from">
                  disfkjfdi fddffdjfd sjdfsij sfndjfnsdjbjs bdjfbcjebsdfjsd
                </div>
                <div className="message-from">
                  disfkjfdi fddffdjfd sjdfsij sfndjfnsdjbjs bdjfbcjebsdfjsd
                </div>
                <div className="message-from">
                  disfkjfdi fddffdjfd sjdfsij sfndjfnsdjbjs bdjfbcjebsdfjsd
                </div>
                <div className="message-from">
                  disfkjfdi fddffdjfd sjdfsij sfndjfnsdjbjs bdjfbcjebsdfjsd
                </div>
                <div className="message-from">
                  disfkjfdi fddffdjfd sjdfsij sfndjfnsdjbjs bdjfbcjebsdfjsd
                </div>
              </div>
              <div className="to-username">
              <div className="message-to">
                  disfkjfdi fddffdjfd sjdfsij sfndjfnsdjbjs bdjfbcjebsdfjsd
                </div>
              </div> */}
              <div className="message-from">dfsfd
              sfdfds fsdfds sdfsddf
              </div>
              <div className="message-to">dfsfd
              sfdfds fsdfds sdfsddf dfsfdsfdfdshbdfsbdfsh dfshbdhfbshbfsd bfsdhfdshfsd hfsdfdsdfs
              </div>
              <div className="message-to">dfsfd
              sfdfds fsdfds sdfsddf dfs
              </div>
              <div className="message-from">dfsfd
              sfdfds fsdfds sdfsddf
              </div>
            </div>
            
            <div className="bottom-right-chat">
              <textarea cols={100} rows={4} className="input-send"/>
              <button><img src={send}></img></button>
            </div>

          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
   );
}
 
export default Chat;