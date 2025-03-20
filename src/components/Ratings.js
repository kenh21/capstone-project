import { Col, Card, Container, Image } from "react-bootstrap";
import '../App.css';
function Ratings (props) {
    return (
        <Container fluid className="m-2">
        <Col className="d-flex justify-content-center">
        <Card className="
        text-center 
        d-flex 
        justify-content-center 
        align-items-center"
        style={{ width: '200px', height: '200px' }}>
      <Card.Title className="ratings-text">{props.header}: 5/5</Card.Title>
      <Image className="
      d-flex 
      justify-content-center 
      align-items-center 
      img-border-style"
       variant="top"
      src={props.image} height={50} width={50}/>
      <Card.Body>
        <Card.Title className="ratings-text">{props.title}</Card.Title>
        <Card.Text className="main-body-text-bl">
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Container>
    )

}

export default Ratings;