import React from 'react';
import './index.css';
import data from './list.js';
import Card from './card.js';
import Form from './form.js';



export default function App(){
  const [color, setColor] = React.useState(data.map(item => item.color));
  
  function toggle(id){
    setColor(prevState => prevState.map((item, index) => index === id ? !item : item));
  }

  const cards = data.map((item, index) => {
    return <Card key={index} {...item} id = {index} itemColor = {color[index]} function={toggle} />
  })
  
  return (
    <>
      <div className='container'>
        {/* {cards} */}
        <Form />
      </div>
    </>
  )
}
