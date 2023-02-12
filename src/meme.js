import React from 'react';

export default function Meme(){

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(response => response.json()).then(data => setAllMemes(data.data.memes));
  }, []);


  const [randomMeme, setRandomMeme] = React.useState(
    {
      topText:'', 
      bottomText:'', 
      randomImage:'http://i.imgflip.com/1bij.jpg'
    });

  function getMemeImage(){
    const randomNum = Math.floor(Math.random() * allMemes.length);
    setRandomMeme(object => ({...object, randomImage:allMemes[randomNum].url}));
  }


  function handleChange(event){
    const {name, value} = event.target;
    setRandomMeme(prevMeme => (
      {
        ...prevMeme,
        [name]: value
      }
    ));
  }

  return (
    <div className='main'>
      <div className='form'>
        <input 
          type='text' 
          onChange={handleChange} 
          placeholder='Top Text' 
          name='topText' 
          value={randomMeme.topText} 
          className='form--input'
        />
        <input 
          type='text' 
          onChange={handleChange} 
          placeholder='Bottom Text' 
          name='bottomText' 
          value={randomMeme.bottomText} 
          className='form--input' 
        />

        <button onClick={getMemeImage} className='form--button'>Get a new meme image 🖼</button>
      </div>
      <div className='meme'>
        <img src={randomMeme.randomImage} alt='' className='meme--image'></img>
        <h2 className='meme--text top'>{randomMeme.topText}</h2>
        <h2 className='meme--text bottom'>{randomMeme.bottomText}</h2>
      </div>
    </div>
  )
}