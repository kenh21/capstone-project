import { Container, Row, Col, Alert } from "react-bootstrap";
import Header from "./Header";
import NavBar from "./NavBar";
import Menu from "./Menu";
import '../App.css';
import { useState } from "react";
function Login () {
    const [values, setValues] = useState ({
        userName: '',
        password: '',
    })
    const [showAlert, setShowAlert] = useState(true);

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting values:", values);
        setShowAlert(true);
    }

    return (
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
<Container fluid className="md-0 pd-0 vh-100 align-content-center hero">
    <Row className="justify-content-center">
        <form className="bg-light py-5 forms col-4" onSubmit={handleSubmit}>
            <label
                htmlFor="userName">
                Enter Your User Name
            </label>
            <input
                className="my-2"
                type="text"
                name="userName"
                id="userName"
                placeholder='"Mimi21"'
                required
                onChange={(e) => {handleChanges(e)}}>
            </input>
            <label
                htmlFor="password">
                Enter Your Password
            </label>
            <input
                className="my-2"
                type="password"
                name="password"
                id="password"
                required
                onChange={(e) => {handleChanges(e)}}>
            </input>
            <input
                name="submit"
                className="mt-4 submitBtn"
                type="submit"
                value="Login"
                aria-label="on click">
                </input>

        </form>
    </Row>
    <Container fluid className="d-flex justify-content-center">
    <Row>
    {showAlert && (
        <Alert
            className="mt-4 alerts justify-self-center"
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible>
            Successfully Logged In!
        </Alert>)}
    </Row>
    </Container>
</Container>
</Container>

    )
}

export default Login;