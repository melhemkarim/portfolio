import {React, useRef} from 'react';
import './Contact.css';
import { Container , Card , Form , Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLinkedin, FaGithub, FaWhatsapp,    } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
AOS.init();


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7v0rf37', 'template_o5m77ox', form.current, 'BU2b-tzydfECLr7xY')
      .then((result) => {
          console.log(result.text);
          alert("message sent");
      }, (error) => {
          console.log(error.text);
          alert("error");
      });
  };

  return (
    <div className='contact' id='contact'>
    <Container>
        <div data-aos="fade-right " data-aos-duration="1500">
        <h1>Let's get in touch</h1>
        </div>
<div data-aos="fade-up" data-aos-duration="1500">
            <Row className='border' >
                <Col sm>
                <h5>Send me a message</h5>
                <div className='contact-form'>
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="email" >
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="name@example.com" name="email" />
                    </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                       <Form.Label>Your Message</Form.Label>
                       <Form.Control as="textarea" rows={3} name="message" />
                      </Form.Group>
                <Button type='submit' variant="primary"> Send!</Button>{' '}
                </Form>
                </div>
                </Col>
                
                <Col sm>
                <h5 className='contact-socials-title'>Socials</h5>
                <div className='contact-socials'>
                <Col xs={4} md={4}><a href="https://www.linkedin.com/in/karim-melhem/"><li className='rounded-circle'><FaLinkedin/></li></a> <p>Linkedin</p></Col>
                <Col xs={4} md={4}><a href="https://github.com/melhemkarim"><li className='rounded-circle'><FaGithub/></li></a> <p>GitHub</p></Col>
                <Col xs={4} md={4}><a href="https://api.whatsapp.com/send?phone=96171958051"><li className='rounded-circle'><FaWhatsapp/></li></a> <p>Whatsapp</p></Col>
                </div>
                </Col>
            </Row>
            </div>
    </Container>
    </div>

  );
};
export default Contact;