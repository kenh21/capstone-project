import { Col, Card, Button, Container } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import '../App.css';

function Cards (props) {
    return (
        <Container fluid>
            <Col>
                <Card className="cards-background my-4 cards-selected"
                      style={{ width: '265px', height: '439px' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body className="d-flex row">
                    <Card.Title className="d-flex justify-content-between card-header-text">
                        {props.title} <span></span> ${props.cost.toFixed(2)}
                    </Card.Title>
                    <Card.Text className="mt-3 pb-0 mb-1 main-body-text-bl">
                    {props.text}
                    </Card.Text>
                    <Button variant="submit" className={`d-${props.display} menu-btn w-50 ms-1 sign-up-button`}>
                    Add to Order
                    </Button>
                </Card.Body>
                </Card>
            </Col>
        </Container>
    )
}
Cards.propTypes = {
    title: propTypes.string,
    cost: propTypes.number,
    text: propTypes.string,
}

export default Cards;