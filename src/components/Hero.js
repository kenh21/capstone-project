import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/image";
import '../App.css';


function Hero() {
    return (
    <Container fluid>
    <Row>
        <Col>
        <h1 className="hero-section-h1-text">Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Velit sint ea incididunt velit commodo amet aute et in sunt deserunt ipsum sint minim.</p>
        <Button>
            Reserve a Table
        </Button>
        </Col>
        <Col className=" d-flex justify-content-center align-items-center">
            <Image src='/Images/hero-image.jpg' alt='hero-image' className="
            m-5
            rounded-4
            " />
        </Col>
    </Row>
    </Container>
);
};

export default Hero;