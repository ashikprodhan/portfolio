import React from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import Home from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';

const Navbar = () => {
    return (
        <div>

<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Ashik</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link text-white active" aria-current="page" href="#home">Home</a>
        <a className="nav-link text-white" href="#project">projects</a>
        <a className="nav-link text-white" href="#skill">skills</a>
        <a className="nav-link text-white" href="#contact">contact</a>
        <a className="nav-link text-white" href="#blog">blogs</a>
        <a className="nav-link text-white" href="#about">about </a>
      
      </div>
    </div>
  </div>
</nav>
           
           
            
        </div>
    );
};

export default Navbar;