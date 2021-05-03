import React from 'react';
import './Header.css';
import Typed from 'react-typed';
import ParticlesBg from 'particles-bg'
const Header = () => {
    return (
        <div className="header-container" >
           <ParticlesBg color="black" num={200} type="cobweb" bg={true} />
      <div className="d-flex justify-content-center align-items-center w-100">
      <div className="header-info w-50 p-5 mt-5 ">
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
       
        </div>
    );
};

export default Header;