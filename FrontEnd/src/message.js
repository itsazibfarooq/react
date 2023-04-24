import React from 'react';

function Message({ message }) {
  return (
    <p className={`chat__message ${!message.recieved && 'chat_message_reciever'}`}>
      <span className='chat__name'>{message.name}</span>
      {message.message}
      <span className='chat__timestamp'>
        {message.timestamp}
      </span>
    </p>
  )
}

export default Message;
