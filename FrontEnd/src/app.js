import React from 'react';
import Sidebar from './sidebar';
import Chat from './chat';

function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default App
