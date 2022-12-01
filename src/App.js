import React from 'react';
import './App.css';
import {
  Route,
  Routes
} from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/services' element={<Services/>}/>
              <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/> 
    </div>
  );
}

export default App;
