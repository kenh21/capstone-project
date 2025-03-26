import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Col, Row, Container, Image, Nav } from 'react-bootstrap';
import FooterImg from '../Images/footer.jpeg';
import { HashLink } from 'react-router-hash-link';

function Footer() {
    return (
        <Container fluid className='footer p-5'>
            <Row className='d-grid-column col-lg-auto col-md-auto col-sm-2 col-xs-2'>
            <Col>
            <Image src={FooterImg} width={195} className='img-border-style ms-5' alt='Owners standing in front of a stove top'/>
            </Col>
            <Col className='mt-2'>
           <Nav className='d-flex flex-column justify-content-space-around ms-3'>
              <HashLink className='text-dark fw-bolder ps-3 pb-3' smooth to='#header'>Home</HashLink>
              <HashLink className='text-dark fw-bolder ps-3 pb-2' smooth to='#about'>About</HashLink>
              <Nav.Link className='text-dark fw-bolder ' href='/OnlineMenu'>Menu</Nav.Link>
              <Nav.Link className='text-dark fw-bolder ' href='/Reservations'>Reservations</Nav.Link>
              <Nav.Link style={{height: 40}} className='text-dark fw-bolder ' href='/OnlineMenu'>Order Online</Nav.Link>
              <Nav.Link className='text-dark fw-bolder ' href='/Login'>Login</Nav.Link>
        </Nav>
        </Col>
        <Col className='mt-2'>
            <Nav className='d-flex flex-column justify-content-space-around ms-lg-3 ms-md-3 ms-sm-3 ms-xs-3'>
                <Nav.Link className='text-dark fw-bolder ' href='#'>Address</Nav.Link>
                <Nav.Link className='text-dark fw-bolder ' href='#'>Phone Number</Nav.Link>
                <Nav.Link className='text-dark fw-bolder ' href='#'>Email</Nav.Link>
            </Nav>
        </Col>
        <Col className='mt-2'>
            <Nav className='d-flex flex-column justify-content-space-around ms-3'>
                <Nav.Link className='text-dark fw-bolder ' href='#'>Address</Nav.Link>
                <Nav.Link className='text-dark fw-bolder ' href='#'>Phone Number</Nav.Link>
                <Nav.Link className='text-dark fw-bolder ' href='#'>Email</Nav.Link>
            </Nav>
        </Col>
        </Row>
        </Container>
    )
}

export default Footer;