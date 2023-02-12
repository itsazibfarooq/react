import React from 'react';
import './index.css';
import data from './list.js';


function Card(props){
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

export default function App(){
  const [color, setColor] = React.useState(data.map(item => item.color));
  
  function toggle(id){
    setColor(prevState => prevState.map((item, index) => index === id ? !item : item));
  }

  const cards = data.map((item, index) => {
    return <Card key={index} {...item} id = {index} itemColor = {color[index]} function={toggle} />
  })
  
  return (
    <div className='container'>
      {cards}
    </div>
  )
}
