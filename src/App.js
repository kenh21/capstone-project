import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Menu from './components/Menu'
import Main from './components/Main';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    < >
    <Container fluid className='m-0 p-0'>
      <Row className='header'>
        <Col>
          <Header />
        </Col>
        <Col>
          <NavBar />
          <Menu />
        </Col>
        </Row>
        <Row className='hero'>
          <Hero />
        </Row>
        <Row>
          <Highlights />
        </Row>
        <Row className='testimonials'>
          <Testimonials />
          </Row>
        <Row>
          <About />
        </Row>
        <Row className='footer'>
          <Footer />
        </Row>
    </Container>
    </>
  );
}

export default App;
