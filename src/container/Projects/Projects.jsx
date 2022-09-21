import React from 'react';
import './Projects.css';
import { Container , Card , ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import candy from './imgs/candy.png'
import inspirations from './imgs/inspirations.png'
import AOS from 'aos';
AOS.init();


const Projects = () => {
 

  return (
   
    <div className='projects' id='projects'>
      <Container>
        <Row>
        <div data-aos="fade-right" data-aos-duration="1500">
        <h1>
          Projects
        </h1>
        </div>
        <Col>
        <div data-aos="zoom-in-up" data-aos-duration="1500">
        <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={candy} />
      <Card.Body>
        <Card.Title>Candy Moon</Card.Title>
        <Card.Text>
          A website built and designed for a candy store
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>React.JS</ListGroup.Item>
        <ListGroup.Item>HTML5</ListGroup.Item>
        <ListGroup.Item>CSS3</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://candymoon.netlify.app">View Webiste Demo</Card.Link>
      </Card.Body>
    </Card>
    </div>
        </Col>

          <Col>
          <div data-aos="zoom-in-up" data-aos-duration="1500">
        <Card className='cards' style={{ width: '19rem' }}>
      <Card.Img variant="top" src={inspirations} />
      <Card.Body>
        <Card.Title>Inspirations by Laura</Card.Title>
        <Card.Text>
          A website built and designed for a Clothing/Makeup Store
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>React.JS</ListGroup.Item>
        <ListGroup.Item>HTML5</ListGroup.Item>
        <ListGroup.Item>CSS3</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://inspirationsbylaura.netlify.app/">View Webiste Demo</Card.Link>
      </Card.Body>
    </Card>
    </div>
        </Col>
        
        </Row>
      </Container>
    </div>

  );
};
export default Projects;