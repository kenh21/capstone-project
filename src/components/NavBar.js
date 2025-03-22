import '../App.css';
import Nav from 'react-bootstrap/Nav';
import {
        BrowserRouter as Router,
        Routes,
        Route,
        Link
 } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import About from './About';

function NavBar() {
return (
  <Router>
    <Nav className='
    justify-content-end
    flex-nowrap
    flex-grow-1
    d-none
    d-sm-none
    d-md-none
    d-lg-flex
    ms-5
    me-5
    ps-5'>
              <Nav.Link className='text-dark fw-bolder pe-0' as={Link} to={"/header"}>Home</Nav.Link>
              <Nav.Link className='text-dark fw-bolder pe-0' as={Link} to={"/about"} >About</Nav.Link>
              <Nav.Link className='text-dark fw-bolder pe-0' as={Link} to={"/#"}>Menu</Nav.Link>
              <Nav.Link className='text-dark fw-bolder pe-0' as={Link} to={"/#"}>Reservations</Nav.Link>
              <Nav.Link className='text-dark fw-bolder pe-0' as={Link} to={"/#"}>Order Online</Nav.Link>
              <Nav.Link className='text-dark fw-bolder pe-0' as={Link} to={"/#"}>Login</Nav.Link>
            </Nav>
    </Router>
)
}

export default NavBar;