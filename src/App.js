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


function App() {
  return (
    < >
    <div className='layout'>
    <div className='header'>
      <Header />
      <NavBar />
      <Menu />
    </div>
    <div className='main'>
      <div className='hero'>
      <Hero />
    </div>
    <Main />
    <Highlights />
    </div>
    <div className='testimonials'>
      <Testimonials />
    </div>
      <div className='about'>
        <About />
      </div>
    <div className='footer'>
    <Footer />
    </div>
    </div>
    </>
  );
}

export default App;
