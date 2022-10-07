import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import queryString from 'query-string';//get data from URL
import { io } from 'socket.io-client';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

import './Chat.css';

let socket;

function Chat() {
  let location = useLocation();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
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

  useEffect(() => {
    socket.on('message', (message) => {
      console.log('receive message, extend')
      setMessages([...messages, message]);
    })
  }, [messages]);

  // function for sending messages
  const sendMessage = (e) => {
    e.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log('name:', name, 'm:', message, ', ms:', messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
}

export default Chat;