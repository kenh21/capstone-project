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
        <h3>Chicago</h3>
        <p>Velit sint ea incididunt velit commodo amet aute et in sunt deserunt ipsum sint minim.</p>
        <Button href='#' type="submit" className="mt-5 p-3">
            Reserve a Table
        </Button>
        </Col>
        <Col className=" d-flex justify-content-center align-items-center">
            <Image src='/Images/hero-image.jpg' alt='hero-image' className="
            m-5
            rounded-4
            "/>
        </Col>
    </Row>
    </Container>
);
};

export default Hero;