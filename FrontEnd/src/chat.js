import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import Message from './message';
import backend from './axios';

function Chat({ messages }) {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const time = `${new Date().getHours()}:${new Date().getMinutes()}`
    await backend.post('/new', {
      message: input,
      name: "Azib",
      timestamp: time,
      recieved: false
    });
    setInput('');
  }

  const chatBodyRef = useRef(null);

  useEffect(() => {
    const chatBody = chatBodyRef.current;
    const observer = new MutationObserver(() => {
      chatBody.scrollTop = chatBody.scrollHeight;
    });

    observer.observe(chatBody, { childList: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chat__body' ref={chatBodyRef}>
        {messages.map((msg, index) => {
          return (<Message key={index} message={msg} />);
        })}
      </div>

      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type a message'
            type='text'
          />
          <button
            type='submit'
            onClick={sendMessage}>
            Send a Message
          </button>
        </form>
        <MicOutlined />
      </div>

    </div>
  )
}

export default Chat

const chatBody = document.querySelector('.chat__body');

if (chatBody) {
  const observer = new MutationObserver(() => {
    chatBody.scrollTop = chatBody.scrollHeight;
  });
  observer.observe(chatBody, { childList: true, subtree: true });
}