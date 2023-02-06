import React from 'react';
import trollface from './assets/troll-face.png';

export default function Header(){
  return (
    <div className='header'>
      <img className='header--image' src={trollface} alt=''></img>
      <h2 className='header--title'>Meme Generator</h2>
    </div>
  )
};