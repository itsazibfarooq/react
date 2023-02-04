import React from 'react';
import Navbar from './navbar.js';
import Hero from './hero.js';
import Card from './card.js';
import data from './data.js';


export default function App(){
  const cards = data.map((e) => {
    return <Card {...e}/>
  });
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <div className='cardList'>
        {cards}
      </div>
    </div>
  )
}