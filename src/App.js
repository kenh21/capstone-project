import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import OnlineMenu from './components/OnlineMenu';
import About from './components/About';
import Reservations from './components/Reservations';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Layout />} />
     <Route path='/About' element={<About />} />
     <Route path='/OnlineMenu' element={<OnlineMenu />} />
     <Route path='/Reservations' element={<Reservations />} />
     <Route path='/Login' element={<Login />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
