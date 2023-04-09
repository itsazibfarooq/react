import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    }
    catch (error) {
      setErr(true);
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Login</span>
        <form onSubmit={handleLogin}>
          <input type='email' placeholder='abc@email.com' />
          <input type='password' placeholder='abc123!' />
          <button>Sign In</button>
        </form>
        {err && <span>Something went wrong</span>}
        <p>You do not have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login

