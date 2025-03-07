import '../App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
return (
    <Nav className='
    justify-content-space-between 
    flex-grow-1 
    d-none
    d-sm-none
    d-md-none 
    d-lg-flex'>
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