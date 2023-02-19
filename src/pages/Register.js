import React from 'react'
import add from '../img/addAvatar.png';

function Register() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Register</span>
        <form>
          <input type='text' placeholder='John Doe' />
          <input type='email' placeholder='abc@email.com' />
          <input type='password' placeholder='abc123!' />
          <input type='file' id='file' style={{ display: 'none' }} placeholder='my-photo.jpg' />
          <label htmlFor='file'>
            <img src={add} alt='upload icon' />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
