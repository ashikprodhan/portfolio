import React from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import Home from '../About/About';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';

const Navbar = () => {
    return (
        <div>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand text-white">My portfolio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-link active text-white" aria-current="page">Home</Link>
                            <Link to="/about" className="nav-link active text-white">About</Link>
                            <Link to="/skill" className="nav-link active text-white">skill</Link>
                            {/* <Link to="/allOrder" className="nav-link active">All order</Link> */}
                            <Link to="/blogs" className="nav-link active text-white">Blogs</Link>
                            <Link to="/projects" className="nav-link active text-white">Projects</Link>


                        </div>
                    </div>
                </div>
                

            </nav>
            <Header></Header>
            <Home></Home>
            <Skills></Skills>
        </div>
    );
};

export default Navbar;