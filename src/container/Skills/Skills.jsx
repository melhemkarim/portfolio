import React from 'react';
import './Skills.css';
import { Container , Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaReact, FaHtml5, FaCss3, FaPhp, FaSass,   } from 'react-icons/fa';
import {SiMicrosoftexcel, SiMicrosoftpowerpoint, SiMicrosoftword, SiMysql} from 'react-icons/si';
import vector from './vector.png'
import AOS from 'aos';
AOS.init();

const Skills = () => {
 

  return (
    <div className='skills' id='skills'>
      <Container>
      <Row>
      <div data-aos="fade-right " data-aos-duration="1500">
        <h1>Skills And Experiences</h1>
        </div>
        
        <Col >
        <div data-aos="fade-up-right" data-aos-duration="1500">
        <Row className='skills-row'>
        <Col xs={6} md={4}><li className='rounded-circle'><FaReact/></li> <p>React JS</p></Col>
        <Col xs={6} md={4}><li className='rounded-circle'><FaHtml5/></li> <p>HTML5</p></Col>
        <Col xs={6} md={4}><li className='rounded-circle'><FaCss3/></li>  <p>CSS3</p></Col>

        <Col xs={6} md={4}><li className='rounded-circle'><FaPhp/></li> <p>PHP</p></Col>
        <Col xs={6} md={4}><li className='rounded-circle'><SiMysql/></li> <p>SQL</p></Col>
        <Col xs={6} md={4}><li className='rounded-circle'><FaSass/></li>  <p>SASS</p></Col>

        <Col xs={6} md={4}><li className='rounded-circle'><SiMicrosoftexcel/></li> <p>Excel</p></Col>
        <Col xs={6} md={4}><li className='rounded-circle'><SiMicrosoftword/></li> <p>Word</p></Col>
        <Col xs={6} md={4}><li className='rounded-circle'><SiMicrosoftpowerpoint/></li>  <p>PowerPoint</p></Col>
        
      </Row>
      </div>
        </Col>
        
        
        <Col>
        <div  className='experience'>
        
          <Container>
          <h2>No Experiences Yet.</h2>
          <p>Delighted to start gaining experiences</p>
          <img src={vector} alt="" />
          </Container>
        </div>
        </Col>
      </Row>
      </Container>
    </div>

  );
};
export default Skills;