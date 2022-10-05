import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import queryString from 'query-string';//get data from URL
import { io } from 'socket.io-client';

import './Chat.css';

function Chat() {
  let location = useLocation();
  let socket;
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:8000'

  useEffect(() => {
    // get data from URL
    const { name, room } = queryString.parse(location.search);
    // console.log('1. location.pathname:', location.pathname);
    // console.log('2. location.search:', location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    console.log('send event to server')
    socket.emit('join', { name, room }, ({ error }) => {
      alert(error);
    });

    return () => {
      // clean
      socket.emit('disconnect');
      socket.off();
    }
  }, [ENDPOINT, location.search]);

  return (
    <h1>Chat</h1>
  );
}

export default Chat;