import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Menu from './components/Menu'
import Main from './components/Main';
import Footer from './components/Footer';


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
    <Main />
    </div>
    <div className='footer'>
    <Footer />
    </div>
    </div>
    </>
  );
}

export default App;
