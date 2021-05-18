import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Particles from 'react-particles-js';
import Home from './components/About/About';
import About from './components/About/About';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Header></Header>
            <Home></Home>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
    </div>
  );
}

export default App;
