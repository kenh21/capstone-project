import { Col, Row, Container, Button } from "react-bootstrap";
import '../App.css';

function Highlights () {
    return (
        <Container fluid>
            <Row>
                <Col className=" 
                d-flex
                justify-content-start
                align-items-center
                mt-5
                ms-5">
                <h2>This Weeks Specials!</h2>
                </Col>
                <Col className=" 
                d-flex 
                justify-content-end 
                me-5 
                mt-5 
                pe-5">
                    <Button href='#' type="submit" className="
                    p-3 
                    main-button">
                    Online Menu
                    </Button>
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
);
};

export default Highlights;