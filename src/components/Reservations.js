import { Col, Container, Row, Image } from "react-bootstrap";
import NavBar from "../components/NavBar"
import  Header from "../components/Header"
import Restaurant from "../Images/restaurant.jpg"
import '../App.css';
import { useState } from "react";

function Reservations () {
  const [values, setValues] = useState ( {
      date: '',
      time: '',
      guests: '',
      occasion: '',
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    alert("Successfully Submitted!");
  }
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
    <Container fluid className="hero vh-100 pt-5">
  <form className="bg-light py-5 forms" onSubmit={handleSubmit}>
    <Row className="d-col">
      <Col>
    <label htmlFor="date">Choose Date</label>
    <input name="date" type="date" id="date" onChange={(e) => handleChanges(e)} required></input>

    <label htmlFor="time">Choose Time</label>
    <select id="time" name="time" type="time" onChange={(e) => handleChanges(e)} required>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
    </select>

    <label htmlFor="guests">Number of Guests</label>
    <input name="guests" type="number" placeholder="1" min={1} max={10} id="guests" onChange={(e) => handleChanges(e)} required></input>

    <label htmlFor="occasion">Occasion</label>
    <select id="occasion" name="occasion" onChange={(e) => handleChanges(e)} required>
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