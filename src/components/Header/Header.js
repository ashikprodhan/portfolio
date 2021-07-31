import React from 'react';
import './Header.css';
import Typed from 'react-typed';
import ParticlesBg from 'particles-bg'
import Button from "react-bootstrap/Button";
const Header = () => {
    return (
        <div id="home" className="header-container" >
    {/* <ParticlesBg color="black" num={200} type="cobweb" bg={true} />  */}
      <div className="d-flex justify-content-center align-items-center w-100">
      <div className="header-info w-50 p-4 mt-5 ">
        <h1  >Hi,<br/> this is Ashik</h1> 
        <Typed
                    className="text-white"
                    strings={['I am developer','I am designer','I am fast Learner']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                <br/>
                <div>
                    <a href="https://drive.google.com/file/d/1oMTO_33aw2UT0EgLhllz3cDJk0XkIdnw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        My Resume
                      </Button>
                    </a>
                  </div>
               
        </div>
      </div>
       
        </div>
    );
};

export default Header;