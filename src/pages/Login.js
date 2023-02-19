import React from 'react'

function Login() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Login</span>
        <form>
          <input type='email' placeholder='abc@email.com' />
          <input type='password' placeholder='abc123!' />
          <button>Sign In</button>
        </form>
        <p>You do not have an account? Register</p>
      </div>
    </div>
  )
}

export default Login

