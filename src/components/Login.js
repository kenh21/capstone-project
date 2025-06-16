import { Container, Row, Col, Alert } from "react-bootstrap";
import Header from "./Header";
import NavBar from "./NavBar";
import Menu from "./Menu";
import LoginForm from "./LoginForm";
import '../App.css';

function Login () {
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
    <Row className="mb-5 pb-5">
        <h2
        className="d-flex justify-content-center fade-in">
            Welcome To The Little Lemon
        </h2>
        <h3
        className="d-flex justify-content-center fade-in">
            Sign Up To Get Points To Redeem For Rewards!
        </h3>
    </Row>
    <Row className="justify-content-center">
        <LoginForm />
    </Row>
</Container>
</Container>


    )
}

export default Login;