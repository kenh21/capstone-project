import '../App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink } from 'react-router-hash-link';

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
    ps-5
    nav-bar-text'>
        <Nav.Link
        href='/'
        className='
        text-dark
        fw-bolder
        pe-0
        nav-text'>
            Home
        </Nav.Link>
        <HashLink
        smooth='true'
        to='#about'
        className='
        text-dark
        fw-bolder
        justify-content-center
        align-content-center
        ps-3
        nav-text'>
            About
        </HashLink>
        <Nav.Link
        href='/OnlineMenu'
        className='
        text-dark
        fw-bolder
        pe-0
        nav-text'>
            Menu
        </Nav.Link>
        <Nav.Link
        href='/Reservations'
        className='
        text-dark
        fw-bolder
        pe-0
        nav-text'>
            Reservations
        </Nav.Link>
        <Nav.Link
        href='/Login'
        className='
        text-dark
        fw-bolder
        pe-0
        nav-text'>
            Login
        </Nav.Link>
    </Nav>
)
}

export default NavBar;