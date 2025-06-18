import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/image";
import '../App.css';


function Hero() {
    return (
    <Container fluid>
    <Row>
        <Col className="d-flex-column
        justify-content-center
        align-content-center
        ms-5">
        <h1 className="hero-section-h1-text">Little Lemon</h1>
        <h3 className="main-h2-text mt-2">Chicago</h3>
        <p className="main-body-text">Rooted in family
        tradition, our Mediterranean flavors are served
        fresh with a California soul.</p>
        <Button href='Reservations' type="submit"
        className="
        mt-5
        p-3
        mb-md-5
        main-button
        selected-button"
        aria-label="on click">
            Reserve a Table
        </Button>
        </Col>
        <Col className="
        d-flex justify-content-center
        align-items-center
        lg-pe-5
        justify-content-lg-end">
            <Image
            src='/Images/hero-image.jpg'
            alt='hero-image'
            className="
            m-5
            rounded-4
            "/>
        </Col>
    </Row>
    </Container>
);
};

export default Hero;