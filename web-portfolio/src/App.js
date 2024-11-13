import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <main>
          <Home/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
