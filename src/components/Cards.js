import { Col, Card, Button, Container } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import '../App.css';

function Cards (props) {
    return (
        <Container fluid>
            <Col>
                <Card className="cards-background my-4"
                      style={{ width: '265px', height: '439px' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        {props.title} <span></span> ${props.cost.toFixed(2)}
                    </Card.Title>
                    <Card.Text className="mt-3">
                    {props.text}
                    </Card.Text>
                    <Button variant="primary" className={`d-${props.display}`}>
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