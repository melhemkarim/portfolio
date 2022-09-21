import React from 'react';
import './Footer.css';

import {
    MDBFooter,
    MDBContainer,
  } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import { Container , Row , Col } from 'react-bootstrap';

const Footer = () => {
 

  return (
   
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#5c0ff8' }}>
      <Container>
        <Row>
          <Col sm >
          <div className='text-center p-3' style={{ backgroundColor: '#5c0ff8' , marginBottom: '10px' , marginTop:'10px' }}>
        © 2022 Copyright: 
        <a className='text-white' href='https://mdbootstrap.com/'>
          KarimMelhem.com
        </a>
      </div>

          </Col>
          <Col sm>
          <div className='btn-top'>
        <a href="#header"><li className='rounded-circle'><FaArrowUp/></li></a>
        </div>
          </Col>
        </Row>
      </Container>
     
       
    </MDBFooter>


  );
};
export default Footer;