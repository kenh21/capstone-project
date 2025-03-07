import '../App.css';
import  Image from 'react-bootstrap/Image';
function Header() {
    return (
        <header className="headers">
            <Image src='/Images/logo.jpg' alt='logo' className=' ms-auto'/>
        </header>
    )
}

export default Header;