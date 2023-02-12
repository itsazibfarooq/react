import React from 'react';

export default function Card(props){
  const bgColor = {
    backgroundColor: props.itemColor ? 'green' : 'red'
  };

  return (
    <div className='card'>
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
      <h4>{props.age}</h4>
      <button onClick={() => props.function(props.id)}  style={bgColor}>Flip Color</button>
    </div>
  )
}