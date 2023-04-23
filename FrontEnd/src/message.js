import React from 'react';

function Message(props) {
  return (
    <p className={`chat__message ${props?.reciever}`}>
      <span className='chat__name'>Azib</span>
      This is the message
      <span className='chat__timestamp'>
        {new Date().toString()}
      </span>
    </p>
  )
}

export default Message;
