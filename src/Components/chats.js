import React, { useState, useEffect, useContext } from 'react'
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/authContext';
import { ChatContext } from '../context/chatContext';


function Chats() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);


  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => { unsub() };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    console.log('handle select payload', user);
    dispatch({ type: "CHANGE_USER", payload: user })
  }

  return (
    <div className='chats'>
      {chats && Object.entries(chats)?.map((item) => (
        <div onClick={() => handleSelect(item[1].userInfo)} className='userChat' key={item[0]}>
          <img src={item[1].userInfo?.photoURL} alt="" />
          <div className='userChatInfo'>
            <span>{item[1].userInfo?.displayName}</span>
            <p>{item[1].userInfo?.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chats
