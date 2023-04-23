




import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import Message from './message';

function Chat() {
  const [input, setInput] = useState('');

  const sendMessage = () => {
    console.log('Message sent');
  }

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

      <div className='chat__body'>
        <Message />
        <Message reciever='chat_message_reciever' />
        <Message />
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
