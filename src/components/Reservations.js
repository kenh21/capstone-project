import { Col, Container, Row, Image, Alert } from "react-bootstrap";
import NavBar from "../components/NavBar"
import  Header from "../components/Header"
import  Menu from "../components/Menu";
import Restaurant from "../Images/restaurant.jpg"
import '../App.css';
import { useState } from "react";

function Reservations () {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [values, setValues] = useState ( {
      date: '',
      time: '',
      guests: '',
      occasion: '',
  });

  const handleChanges = async (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (name === "date") {
      const selectedDate = new Date(value);
      const times = await window.fetchAPI(selectedDate);
      console.log("Available times:", times);
      setAvailableTimes(
        times.map((time, index) => ({
          id: index,
          time,
          isDisabled: false,
        }))
      );
    }
  };

  const handleBooking = (bookedTime) => {
    setAvailableTimes(prev =>
      prev.map(slot =>
        slot.time === bookedTime ? { ...slot, isDisabled: true } : slot
      )
    );
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting values:", values);

    const wasSuccessful = window.submitAPI(values);

    if (wasSuccessful) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      handleBooking(values.time);
    } else {
      alert("Reservation failed. Please try again.")
      console.error("Reservation failed.");
    }
  };
  return (
  <>
  <Container fluid className="m-0 p-0 vh-100">
    <Row className="me-5">
      <Col className="ms-5 py-3">
      <Header />
      </Col>
      <Col className="py-3 align-content-center">
      <NavBar />
      <Menu />
      </Col>
    </Row>
    <Row className="justify-content-center pb-5">
    <Image src={Restaurant} className="rest-img"/>
    </Row>
    <Container fluid className="hero vh-100 pt-5">
      <Row className="justify-content-center">
  <form data-testid="reservation-form" className="bg-light py-5 forms col-4" onSubmit={handleSubmit}>
    <label htmlFor="date">Choose Date</label>
    <input className="my-2 selected" name="date" type="date" id="date" onChange={(e) => handleChanges(e)} required></input>
    <label htmlFor="time">Choose Time</label>
    <select className="my-2 py-1 select selected" value={values.time} id="time" name="time" type="time" onChange={(e) => handleChanges(e)} required>
      <option value="" disabled hidden>Select a Time</option>
    {availableTimes.map( (item) => <option key={item.id} disabled={item.isDisabled}>{item.time}</option>)}
    </select>
    <label htmlFor="guests">Number of Guests</label>
    <input className="my-2 selected" name="guests" type="number" placeholder="1" min={1} max={10} id="guests" onChange={(e) => handleChanges(e)} required></input>
    <label htmlFor="occasion">Occasion</label>
    <select className="my-2 py-1 selected" value={values.occasion} id="occasion" name="occasion" onChange={(e) => handleChanges(e)} required>
      <option value="" disabled hidden>Select Occasion</option>
      <option>Birthday</option>
      <option>Anniversary</option>
    </select>
    <label htmlFor="submit"></label>
    <input name="submit" className="mt-4 submitBtn" type="submit" value="Make Your Reservation" aria-label="on click"></input>
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