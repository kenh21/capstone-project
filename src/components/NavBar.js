import '../App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
return (
    <Nav className='
    justify-content-end
    flex-grow-1
    d-none
    d-sm-none
    d-md-none
    d-lg-flex
    ms-5
    me-5
    ps-5'>
              <Nav.Link className='text-dark fw-bolder pe-0' href='#'>Home</Nav.Link>
              <Nav.Link className='text-dark fw-bolder pe-0' href='#'>About</Nav.Link>
              <Nav.Link className='text-dark fw-bolder pe-0' href='#'>Menu</Nav.Link>
              <Nav.Link className='text-dark fw-bolder pe-0' href='#'>Reservations</Nav.Link>
              <Nav.Link className='text-dark fw-bolder pe-0' href='#'>Order Online</Nav.Link>
              <Nav.Link className='text-dark fw-bolder pe-0' href='#'>Login</Nav.Link>
            </Nav>
)
}

export default NavBar;