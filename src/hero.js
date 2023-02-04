import React from 'react';
import photoGrid from './photo-grid.jpg';

export default function Hero(){
  return (
    <div className='hero'>
      <img className = 'hero--image' src={photoGrid} alt=''></img>
      <h1 className='hero--header'>Online Experiences</h1>
      <p className='hero--text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
    </div>
  )
};