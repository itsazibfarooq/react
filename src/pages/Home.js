import React from 'react'
import Sidebar from '../Components/sidebar.js'
import Chat from '../Components/chat.js'

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home
