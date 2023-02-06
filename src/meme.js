import React from 'react';
import memeData from './memeData.js';

export default function Meme(){

  let meme = {topText:'', bottomText:'', randomImage:'http://i.imgflip.com/1bij.jpg'};
  let allMemeImages = memeData.data.memes;

  const [randomMeme, setRandomMeme] = React.useState(meme);

  function getMemeImage(){
    const randomNum = Math.floor(Math.random() * allMemeImages.length);
    setRandomMeme(object => ({...object, randomImage:allMemeImages[randomNum].url}));

    // console.log(randomMeme);
  }
  return (
    <div className='main'>
      <div className='form'>
        <input type='text' placeholder='Top Text' className='form--input'></input>
        <input type='text' placeholder='Bottom Text' className='form--input'></input>
        <button onClick={getMemeImage} className='form--button'>Get a new meme image 🖼</button>
      </div>
      <img src={randomMeme.randomImage} alt='' className='meme--image'></img>
    </div>
  )
}