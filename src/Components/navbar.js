import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../context/authContext';

function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  function handleLogout() {
    signOut(auth);
    navigate('/login');
  }

  return (
    <div className='navbar'>
      <span className='logo'>ChatApp</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName || "Test"}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
