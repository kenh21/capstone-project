import { Col, Row, Container, Button } from "react-bootstrap";
import Bruchetta from "../Images/bruchetta.jpg"
import GreekSalad from "../Images/greek-salad.jpg"
import LemonDessert from "../Images/lemon dessert.jpg"
import '../App.css';
import Cards from "./Cards";

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
            <Row className="mt-5 justify-content-evenly">
                <Col className="p-0 m-0 col-auto">
                <Cards image={GreekSalad} title="Greek salad" cost={12.99} text="The famous greek salad of
                crispy lettuce, peppers, olives and our Chicago style
                feta cheese, garnished with crunchy garlic and
                rosemary croutons." display="none"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={Bruchetta} title="Bruschetta" cost={5.99} text="Our Bruschetta
                is made from grilled bread that has been smeared with
                garlic and seasoned with salt and olive oil." display="none"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={LemonDessert} title="Lemon Dessert" cost={5.00} text="This comes straight
                from grandma's recipe book, every last ingredient
                has been sourced and is authentic
                as can be imagined." display="none"/>
                </Col>
            </Row>
        </Container>
);
};

export default Highlights;