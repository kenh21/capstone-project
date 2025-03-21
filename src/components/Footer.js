import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Col, Row, Container, Image, Nav } from 'react-bootstrap';
import FooterImg from '../Images/footer.jpeg';

function Footer() {
    return (
        <Container fluid className='footer p-5'>
            <Row className=''>
            <Col>
            <Image src={FooterImg} width={195} className='img-border-style ms-5' alt='Owners standing in front of a stove top'/>
            </Col>
            <Col>
           <Nav className='d-flex flex-column justify-content-space-around ms-3'>
              <Nav.Link className='text-dark fw-bolder ' href='#'>Home</Nav.Link>
              <Nav.Link className='text-dark fw-bolder ' href='#'>About</Nav.Link>
              <Nav.Link className='text-dark fw-bolder ' href='#'>Menu</Nav.Link>
              <Nav.Link className='text-dark fw-bolder ' href='#'>Reservations</Nav.Link>
              <Nav.Link className='text-dark fw-bolder ' href='#'>Order Online</Nav.Link>
              <Nav.Link className='text-dark fw-bolder ' href='#'>Login</Nav.Link>
        </Nav>
        </Col>
        <Col>
            <Nav className='d-flex flex-column justify-content-space-around'>
                <Nav.Link className='text-dark fw-bolder ' href='#'>Address</Nav.Link>
                <Nav.Link className='text-dark fw-bolder ' href='#'>Phone Number</Nav.Link>
                <Nav.Link className='text-dark fw-bolder ' href='#'>Email</Nav.Link>
            </Nav>
        </Col>
        <Col>
            <Nav className='d-flex flex-column justify-content-space-around'>
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