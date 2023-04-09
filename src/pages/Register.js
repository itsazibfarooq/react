





import { useState } from 'react'
import add from '../img/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom'

function Register() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });

            // creating document in cloud firestore
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChat", response.user.uid), {});
            navigate('/');
          });
        }
      );
    }
    catch (err) {
      setErr(true);
    }

  }



  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='John Doe' />
          <input type='email' placeholder='abc@email.com' />
          <input type='password' placeholder='abc123!' />
          <input type='file' id='file' style={{ display: 'none' }} placeholder='my-photo.jpg' />
          <label htmlFor='file'>
            <img src={add} alt='upload icon' />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something Went Wrong</span>}
        </form>
        <p>You do have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Register
