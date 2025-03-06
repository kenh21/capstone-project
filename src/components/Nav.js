import '../App.css';
import Menu from './Menu';
function Nav() {
return (
    <nav className='nav'>
        <ul className='links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Menu</a></li>
            <li><a href='#'>Reservations</a></li>
            <li><a href='#'>Order Online</a></li>
            <li><a href='#'>Login</a></li>
        </ul>
        <Menu />
    </nav>
)
}

export default Nav;