import { Col, Container, Row, Image } from "react-bootstrap";
import NavBar from "../components/NavBar"
import  Header from "../components/Header"
import Restaurant from "../Images/restaurant.jpg"
import '../App.css';

function Reservations () {
  return (
  <>
  <Container fluid className="m-0 p-0 vh-100"> 
    <Row className="me-5">
      <Col className="ms-5 py-3">
      <Header />
      </Col>
      <Col className="py-3 align-content-center">
      <NavBar />
      </Col>
    </Row>
    <Row className="justify-content-center pb-5">
    <Image src={Restaurant} className="rest-img"/>
    </Row>
    <Container fluid className="hero vh-100">
  <form>
    <Row className="justify-content-evenly">
      <Col className="col-1">
    <label for="res-date">Choose Date</label>
    <input type="date" id="res-date"></input>
    <label for="res-time">Choose Time</label>
    <select id="res-time">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
    </select>
    <label for="guests">Number of Guests</label>
    <input type="number" placeholder="1" min={1} max={10} id="guests"></input>
    <label for="occasion">Occasion</label>
    <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
    </select>
    <input type="submit" value="Make Your reservation"></input>
    </Col>
    </Row>
  </form>
  </Container>
  </Container>
  </>
  )
}

export default Reservations;