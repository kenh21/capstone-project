import '../App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
return (
    <Nav className='
    justify-content-end
    flex-nowrap
    text-nowrap
    d-none
    d-sm-none
    d-md-none
    d-lg-flex
    ms-5
    me-5
    ps-5'>
              <Nav.Link href='/' className='text-dark fw-bolder pe-0'>Home</Nav.Link>
              <Nav.Link href='/About'className='text-dark fw-bolder pe-0'>About</Nav.Link>
              <Nav.Link href='/OnlineMenu' className='text-dark fw-bolder pe-0'>Menu</Nav.Link>
              <Nav.Link href='/Reservations'className='text-dark fw-bolder pe-0'>Reservations</Nav.Link>
              <Nav.Link href='/OrderOnline'className='text-dark fw-bolder pe-0'>Order Online</Nav.Link>
              <Nav.Link href='/Login'className='text-dark fw-bolder pe-0'>Login</Nav.Link>
              </Nav>
)
}

export default NavBar;