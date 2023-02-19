import React from 'react'

function Navbar() {

  const [show, handleShow] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    }

  }, []);


  return (
    <div className={`nav ${show && 'nav__black'}`} >
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
        alt='Netflix logo'
      />

      <img
        className='nav__avatar'
        src='https://i.pinimg.com/originals/96/20/08/962008bd0eb249e4d575363114cec835.jpg'
        alt='user avatar'
      />
    </div >
  )
}

export default Navbar;
