import React from 'react';
import './Header.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Header = () => {
 

  return (
    
    <section className='Header' id='header'>
      <Container>
        <div className='intro'>
        <h1>Hi, I'm <span className='name'>Karim Melhem</span></h1>
        <h3>and i'm a <span className='ss'>Front-End Developer</span> </h3>
        </div>
        <div className='btn-hiree'>
        <a href="#contact"><Button variant="outline-light">Hire Me</Button>{' '}</a>
        </div>
        </Container>
    </section>

  );
};
export default Header;