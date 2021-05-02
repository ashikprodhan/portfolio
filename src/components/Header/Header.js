import React from 'react';
import './Header.css';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
const Header = () => {
    return (
        <div className="header-container" >
            
        <div className="header-info">
        <h1  >Hi ,<br/> this is Ashik</h1> 
        <Typed
                    className="text-white"
                    strings={['I am developer','I am designer','I am fast Learner']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                <br/>
               
        </div>
       
        </div>
    );
};

export default Header;