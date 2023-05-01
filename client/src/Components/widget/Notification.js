import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Notification = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:3002');

    socket.on('notification', (message) => {
      setMessage(message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      {message && <div>{message}</div>}
    </div>
  );
};

export default Notification;
