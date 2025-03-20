import { Col, Container, Row, Image } from "react-bootstrap";
import Top from "../Images/upper-layer.jpg";
import Bottom from "../Images/bottom-layer.jpg";
import '../App.css';

function About() {
    return (
        <Container fluid>
            <Row className="mt-5 mb-5">
                <Col className="
                d-flex-column 
                justify-content-center 
                align-items-center
                ms-5 ps-5">
                <h1 className="hero-section-h1-text">Little Lemon</h1>
                <h3 className="testimonials-h2-text">Chicago</h3>
                <p className="main-body-text-bl main-text-p mt-3 pt-3 w-75">Amet minim mollit non deserunt ullamco
                est sit aliqua dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                int. Velit officia consequat duis enim velit mollit.</p>
                </Col>
                <Col className="mt-5 mb-5 img-col">
                    <Image className=" img-top img-border-style" src={Top} width={272} height={182} alt="photo of the owners"/>
                    <Image className="  img-bottom img-border-style" src={Bottom} width={272} height={182}alt="photo of the owners"/>
                </Col>
            </Row>
        </Container>
);
};

export default About;