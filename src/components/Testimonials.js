import { Col, Container, Row } from "react-bootstrap";
import Ratings from "./Ratings";
import Profile1 from "../Images/profile-1.jpg"
import Profile2 from "../Images/profile-2.jpg"
import Profile3 from "../Images/profile-3.jpg"
import Profile4 from "../Images/profile-4.jpg"
function Testimonials() {
return (
    <Container fluid className="p-3">
    <Row className="m-5">
        <h2 className="d-flex justify-content-center align-items-center testimonials-h2-text">Testimonials</h2>
    </Row>
    <Row className="gx-2 m-5 p-3">
    <Col className="col-md-3">
    <Ratings header="Rating" title="Noah" image={Profile1} text="Delicious food, great service!"/>
    </Col>
    <Col  className="col-md-3">
    <Ratings header="Rating" title="Olivia" image={Profile2} text="Fantastic flavors, lovely atmosphere."/>
    </Col>
    <Col  className="col-md-3">
    <Ratings header="Rating" title="Ethan" image={Profile3} text="Truly a treat! Highly recommend."/>
    </Col>
    <Col  className="col-md-3">
    <Ratings header="Rating" title="Chloe" image={Profile4} text="Wonderful food and friendly staff!"/>
    </Col>
    </Row>
    </Container>
);
};

export default Testimonials;