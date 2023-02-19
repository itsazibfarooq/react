import React from 'react'


// firebase SDK
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// firebase  hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDK8Nu-GbCwSngr22eqR6BNRjT0R_O3Irc",
  authDomain: "chat-app-b0326.firebaseapp.com",
  projectId: "chat-app-b0326",
  storageBucket: "chat-app-b0326.appspot.com",
  messagingSenderId: "452421729998",
  appId: "1:452421729998:web:9684ba484777a74fecda9f",
  measurementId: "G-GGGPY1NN7E"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <SignOut />
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  )
}


function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button
      onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button
      onClick={() => auth.signOut()}>
      Sign Out
    </button>
  )
}

function ChatRoom() {

  const dummy = React.useRef();

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = React.useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <main>
        {messages &&
          messages.map(msg =>
            <ChatMessage key={msg.id} message={msg} />
          )}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)} />
        <button type='submit'>Send</button>
      </form>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt='user profile' />
      <p>{text}</p>
    </div>
  )
}