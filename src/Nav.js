import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
     <img className='nav__logo'
     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxb8A7Ra_XhFcf845bg1ksefJliQSTlVsmA&usqp=CAU'
     alt='Netflix logo'
     />
     <img className='nav__avatar'
     src='https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'
     alt='Netflix logo'
     />  
    </div>
  )
}

export default Nav