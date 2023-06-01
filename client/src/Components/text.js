import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const socket = io('http://localhost:9000');

  useEffect(() => {
    socket.on('messageToClients', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg.text]);
    });
  }, [socket]);

  function handleSubmit(event) {
    event.preventDefault();
    socket.emit('newMessageToServer', { text: newMessage });
    setNewMessage('');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <form onSubmit={handleSubmit}>
            <div className="col-sm-10">
              <input
                id="user-message"
                type="text"
                placeholder="Enter your message"
                value={newMessage}
                onChange={(event) => setNewMessage(event.target.value)}
              />
            </div>
            <div className="col-sm-2">
              <input className="btn btn-primary" type="submit" value="Send!" />
            </div>
          </form>
          <ul id="messages" style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            {messages.map((message, index) => (
              <li key={index} style={{ padding: '5px 10px', background: index % 2 === 0 ? '#fff' : '#aaa' }}>
                {message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
