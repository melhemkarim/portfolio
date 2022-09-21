import React from 'react';
import './Navbar.css';
import { Container } from 'react-bootstrap';
import logo from './imgs/logo.png'
const Navbar = () => {

  return(
    
      <Container>
      <div className='.app__navbar'>
      <div className='wrapper'>
        <div className='left'>
        <div className='logo'>
          <a href="#header">
            <img src={logo} alt="" />
            </a>
           </div>
           </div>
           <div className='center'>
              <div className='menuItem'> <a href="#header"> Home </a> </div> 
              <div className='menuItem'> <a href="#skills"> Skills</a></div>
              <div className='menuItem'> <a href="#projects"> Projects</a></div>
           </div>
        <div className='right'>
          </div>
      </div>
      </div>
      </Container>
  )
};

export default Navbar;
