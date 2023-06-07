import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Goals from './Components/Goals';
import MyGoTo from './Components/MyGoTo';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';
import './App.css'


function App() {
  return (
    <div className="App">
    <Header/>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/mygoto" element={<MyGoTo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
     
     
    
    </div>
  );
}

export default App;
