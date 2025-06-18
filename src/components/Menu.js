import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Image from 'react-bootstrap/Image';
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader';
import '../App.css';
import { HashLink } from 'react-router-hash-link';

const Menu = () => {
  const [show, setShow] = useState(false);
  const handleShow =()=>{setShow(true);}
  const handleClose =()=> {setShow(false);};
  return (
   <>
   <Button
   onClick={handleShow} 
   className='d-lg-none d-flex pe-4 ms-auto justify-content-end btn-color'>
    <Image src='/Images/menu-1.jpg' />
   </Button>
    <Offcanvas 
    show={show} 
    onHide={handleClose} 
    placement='end'
    responsive='lg'>
       <Container fluid>
      <OffcanvasHeader closeButton>
        <Col>
        <Offcanvas.Title className='position-absolute top-0 start-10 mt-5 nav-bar-header-text'>
          Navigation
        </Offcanvas.Title>
        </Col>
        <Col>
        <Offcanvas.Body className='mt-3'>
            <Nav 
            className='
            justify-content-end
            flex-grow-1
            pe-3
            nav-bar-text'>
              <Nav.Link
                  className='
                  text-dark
                  fw-bolder
                  nav-text'
                  href='/'>
                    Home
              </Nav.Link>
              <HashLink
                  className='
                  text-dark
                  fw-bolder
                  my-1
                  px-3
                  nav-text'
                  smooth to='#about'>
                    About
              </HashLink>
              <Nav.Link
                  className='
                  text-dark
                  fw-bolder
                  nav-text'
                  href='/OnlineMenu'>
                    Menu
              </Nav.Link>
              <Nav.Link
                className='
                  text-dark
                  fw-bolder
                  nav-text'
                  href='/Reservations'>
                    Reservations
              </Nav.Link>
              <Nav.Link
                  className='
                  text-dark
                  fw-bolder
                  nav-text'
                  href='/Login'>
                    Login
              </Nav.Link>
            </Nav>
        </Offcanvas.Body>
        </Col>
      </OffcanvasHeader>
      </Container>
    </Offcanvas>
   </>
  )
}

export default Menu;
