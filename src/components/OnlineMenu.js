import { Col, Row, Container, Button } from "react-bootstrap";
import Bruchetta from "../Images/bruchetta.jpg"
import GreekSalad from "../Images/greek-salad.jpg"
import LemonDessert from "../Images/lemon dessert.jpg"
import PotatoOmelet from "../Images/potato-omelet.jpg"
import '../App.css';
import Cards from "./Cards";

function OnlineMenu () {
    return (
    <>
        <Container fluid className="w-75">
            <Row>

            </Row>
            <Row className="mt-5 justify-content-evenly">
            <Col className="p-0 m-0 col-auto">
                <Cards image={GreekSalad} title="Greek salad" cost={12.99} text="The famous greek salad of
                crispy lettuce, peppers, olives and our Chicago style
                feta cheese, garnished with crunchy garlic and
                rosemary croutons." display="block"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={Bruchetta} title="Bruschetta" cost={5.99} text="Our Bruschetta
                is made from grilled bread that has been smeared with
                garlic and seasoned with salt and olive oil." display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={LemonDessert} title="Lemon Dessert" cost={5.00} text="This comes directly from grandma's recipe book;
                 every ingredient is locally sourced and authentic." display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={PotatoOmelet} title="Potato Omelet" cost={7.00} text="Fluffy, golden potatoes
                and perfectly beaten eggs unite in this Spanish-inspired delight,
                served warm with a sprinkle of paprika and a side of crusty bread."
                display="flex" />
                </Col>
                </Row>
                <Row className="mt-5 justify-content-evenly">
            <Col className="p-0 m-0 col-auto">
                <Cards image={GreekSalad} title="Greek salad" cost={12.99} text="The famous greek salad of
                crispy lettuce, peppers, olives and our Chicago style
                feta cheese, garnished with crunchy garlic and
                rosemary croutons." display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={Bruchetta} title="Bruschetta" cost={5.99} text="Our Bruschetta
                is made from grilled bread that has been smeared with
                garlic and seasoned with salt and olive oil." display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={LemonDessert} title="Lemon Dessert" cost={5.00} text="This comes directly from grandma's recipe book;
                 every ingredient is locally sourced and authentic." display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={PotatoOmelet} title="Potato Omelet" cost={7.00} text="Fluffy, golden potatoes
                and perfectly beaten eggs unite in this Spanish-inspired delight,
                served warm with a sprinkle of paprika and a side of crusty bread."
                display="flex" />
                </Col>
                </Row>
                <Row className="mt-5 justify-content-evenly">
            <Col className="p-0 m-0 col-auto">
                <Cards image={GreekSalad} title="Greek salad" cost={12.99} text="The famous greek salad of
                crispy lettuce, peppers, olives and our Chicago style
                feta cheese, garnished with crunchy garlic and
                rosemary croutons." display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={Bruchetta} title="Bruschetta" cost={5.99} text="Our Bruschetta
                is made from grilled bread that has been smeared with
                garlic and seasoned with salt and olive oil." display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={LemonDessert} title="Lemon Dessert" cost={5.00} text="This comes directly from grandma's recipe book;
                 every ingredient is locally sourced and authentic." display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={PotatoOmelet} title="Potato Omelet" cost={7.00} text="Fluffy, golden potatoes
                and perfectly beaten eggs unite in this Spanish-inspired delight,
                served warm with a sprinkle of paprika and a side of crusty bread."
                display="flex" />
                </Col>
                </Row>
        </Container>

    </>
    )
}

export default OnlineMenu;