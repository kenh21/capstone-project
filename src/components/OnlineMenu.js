import { Col, Row, Container, Button } from "react-bootstrap";
import Header from "./Header";
import NavBar from "./NavBar";
import Menu from "./Menu";
import Bruchetta from "../Images/bruchetta.jpg"
import GreekSalad from "../Images/greek-salad.jpg"
import LemonDessert from "../Images/lemon dessert.jpg"
import PotatoOmelet from "../Images/potato-omelet.jpg"
import Lamb from "../Images/greek-baked-lamb.jpg"
import ArtichokeChicken from "../Images/artichoke-chicken.jpg"
import SpanishMeatBalls from "../Images/meatballs-spanish.jpg"
import Pizza from "../Images/mediterranean-pizza.jpg"
import ShrimpScampi from "../Images/shrimp-scampi.jpg"
import GarlicDijonChicken from "../Images/garlic-dijon-chicken.jpg"
import QuinoaSalad from "../Images/quinoa-salad-salmon.jpg"
import Ratatouille from "../Images/ratatouille.jpg"
import '../App.css';
import Cards from "./Cards";

function OnlineMenu () {
    return (
    <>
    <Container fluid className="m-0 p-0 vh-100">
            <Row>
                    <Col className="ms-5 py-3">
                    <Header />
                    </Col>
                    <Col className="py-3 align-content-center">
                    <NavBar />
                    <Menu />
                </Col>
            </Row>
            <Container fluid className="w-75">
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
                <Cards image={Lamb} title="Lamb Chops" cost={19.99} text="
                Succulent Lamb Chops grilled to perfection, seasoned with
                rosemary and thyme, served with a burst of flavor."
                display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={ArtichokeChicken} title="Artichoke Chicken" cost={12.99} text="
                Tender chicken marinated in herb-infused artichoke puree, grilled to perfection
                for a rich, creamy flavor."
                display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={SpanishMeatBalls} title="Meat Balls" cost={9.00} text="
                Juicy Spanish meatballs, hand-rolled and herb-infused,
                served in a rich, flavorful marinara sauce."
                display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={Pizza} title="Pizza" cost={21.99} text="
                Flaky Mediterranean pizza topped with sun-dried tomatoes,
                olives, feta, ham, and fresh basil for a herby, authentic taste."
                display="flex" />
                </Col>
                </Row>
                <Row className="mt-5 justify-content-evenly">
            <Col className="p-0 m-0 col-auto">
                <Cards image={ShrimpScampi} title="Shrimp Scampi" cost={10.99} text="
                Light garlic butter shrimp scampi tossed in lemon-infused herbs, served
                over crisp pasta for a fresh, zesty meal."
                display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={GarlicDijonChicken} title="Garlic Chicken" cost={11.99} text="
                Garlicky Dijon chicken with herb crust, served in a rich buttery sauce for a bold,
                flavorful experience."
                display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={QuinoaSalad} title="Quinoa Salad" cost={5.00} text="
                Fresh quinoa salad with crisp veggies, herbs, avocado, and feta,
                tossed in a light lemon-tahini dressing."
                display="flex"/>
                </Col>
                <Col className="p-0 m-0 col-auto">
                <Cards image={Ratatouille} title="Ratatouille" cost={18.99} text="
                Hearty ratatouille made with eggplant, zucchini, tomatoes, and herbs
                for a classic French vegetable medley."
                display="flex" />
                </Col>
                </Row>
        </Container>
        </Container>
    </>
    )
}

export default OnlineMenu;