import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Chat from './chat';
import backend from './axios';
import Pusher from 'pusher-js';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    backend.get('/sync').then(response =>
      setMessages(response.data));
  }, []);

  useEffect(() => {
    const pusher = new Pusher('4f2c4783f59306b9cd5c', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unsubscribe();
      channel.unbind_all();
    }
  }, [messages]);

  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  )
}

export default App
