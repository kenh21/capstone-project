import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Col, Row, Container, Image, Nav } from 'react-bootstrap';
import FooterImg from '../Images/footer.jpeg';
import { HashLink } from 'react-router-hash-link';

function Footer() {
    return (
        <Container fluid className='footer p-5' aria-label='footer'>
            <Row className='d-grid-column col-lg-auto col-md-auto col-sm-2 col-xs-2'>
            <Col>
            <Image src={FooterImg} width={195} className='img-border-style ms-5' alt='Owners standing in front of a stove top'/>
            </Col>
            <Col className='mt-2'>
           <Nav className='d-flex flex-column justify-content-space-around ms-3 nav-bar-text' aria-label='website navigation'>
              <HashLink className='text-white fw-bolder ps-3 pb-3 nav-text' smooth to='#header'>Home</HashLink>
              <HashLink className='text-white fw-bolder ps-3 pb-2 nav-text' smooth to='#about'>About</HashLink>
              <Nav.Link className='text-white fw-bolder nav-text' href='/OnlineMenu'>Menu</Nav.Link>
              <Nav.Link className='text-white fw-bolder nav-text' href='/Reservations'>Reservations</Nav.Link>
              <Nav.Link className='text-white fw-bolder nav-text' href='/Login'>Login</Nav.Link>
        </Nav>
        </Col>
        <Col className='mt-2'>
            <Nav className='d-flex flex-column justify-content-space-around ms-lg-3 ms-md-3 ms-sm-3 ms-xs-3 nav-bar-text'aria-label='contact info'>
                <Nav.Link className='text-white fw-bolder nav-text' href='#'>Address</Nav.Link>
                <Nav.Link className='text-white fw-bolder nav-text' href='#'>Phone Number</Nav.Link>
                <Nav.Link className='text-white fw-bolder nav-text' href='#'>Email</Nav.Link>
            </Nav>
        </Col>
        <Col className='mt-2'>
            <Nav className='d-flex flex-column justify-content-space-around ms-3 nav-bar-text' aria-label='contact info'>
                <Nav.Link className='text-white fw-bolder nav-text' href='#'>Address</Nav.Link>
                <Nav.Link className='text-white fw-bolder nav-text' href='#'>Phone Number</Nav.Link>
                <Nav.Link className='text-white fw-bolder nav-text' href='#'>Email</Nav.Link>
            </Nav>
        </Col>
        </Row>
        </Container>
    )
}

export default Footer;