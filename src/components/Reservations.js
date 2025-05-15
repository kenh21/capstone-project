import { Col, Container, Row, Image, Alert } from "react-bootstrap";
import NavBar from "../components/NavBar"
import  Header from "../components/Header"
import Restaurant from "../Images/restaurant.jpg"
import '../App.css';
import { useState } from "react";

function Reservations () {
  const [availableTimes, setAvailableTimes] = useState([
    {id: 1, time: '14:00', isDisabled: false},
    {id: 2, time: '15:00', isDisabled: false},
    {id: 3, time: '16:00', isDisabled: false},
    {id: 4, time: '17:00', isDisabled: false},
    {id: 5, time: '18:00', isDisabled: false},
    {id: 6, time: '19:00', isDisabled: false},
    {id: 7, time: '20:00', isDisabled: false},
    {id: 8, time: '21:00', isDisabled: false},
    {id: 9, time: '22:00', isDisabled: false},
  ]);
  const [showAlert, setShowAlert] = useState(false);
  const [values, setValues] = useState ( {
      date: '',
      time: '',
      guests: '',
      occasion: '',
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
  }

  const handleBooking = (values) => {
    setAvailableTimes(availableTimes =>
      availableTimes.map(timeSlot => {
        if (values.time === timeSlot.time) {
          return {...timeSlot, isDisabled: true };
        }
        return timeSlot;
      })
    );
    console.log(values.time);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    handleBooking(values, availableTimes);
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
      <Row className="justify-content-center">
  <form className="bg-light py-5 forms col-4" onSubmit={handleSubmit}>
    <label htmlFor="date">Choose Date</label>
    <input className="my-2" name="date" type="date" id="date" onChange={(e) => handleChanges(e)} required></input>
    <label htmlFor="time">Choose Time</label>
    <select className="my-2 py-1 select" id="time" name="time" type="time" onChange={(e) => handleChanges(e)} required>
      <option value="" disabled selected hidden></option>
    {availableTimes.map( (items) => <option key={items.id} disabled={items.isDisabled}>{items.time}</option>)}
    </select>
    <label htmlFor="guests">Number of Guests</label>
    <input className="my-2" name="guests" type="number" placeholder="1" min={1} max={10} id="guests" onChange={(e) => handleChanges(e)} required></input>
    <label htmlFor="occasion">Occasion</label>
    <select className="my-2 py-1" id="occasion" name="occasion" onChange={(e) => handleChanges(e)} required>
      <option value="" disabled selected hidden>Select Occasion</option>
      <option>Birthday</option>
      <option>Anniversary</option>
    </select>
    <input className="mt-4 submitBtn" type="submit" value="Make Your reservation" ></input>
  </form>
  </Row>
  <Row className="justify-content-center">
  {showAlert && (
        <Alert className="mt-4 alerts justify-self-center"variant="success" onClose={() => setShowAlert(false)} dismissible>
          Successfully booked your reservation!
        </Alert>)}
  </Row>
  </Container>
  </Container>
  </>
  )
}

export default Reservations;