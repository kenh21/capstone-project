import { Col, Card, Button, Container } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

function Cards (props) {
    return (
        <Container fluid>
            <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title} ${props.cost.toFixed(2)}</Card.Title>
                    <Card.Text>
                    {props.text}
                    </Card.Text>
                    <Button variant="primary" className={`d-${props.display}`}>
                    Add to Order
                    </Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>

            </Col>
            <Col>

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