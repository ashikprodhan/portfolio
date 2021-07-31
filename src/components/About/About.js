import React from 'react';
import './About.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ashik from '../../images/ashik.jpg'
const About = () => {
    return (
        <div id="about">
            <div className="row mt-5">
                <div className="col-md-6">
                   <img className="rounded-circle" style={{width:'11.5em' ,height:"11.5em"}} src={ashik} alt=""/> 
                </div>
                <div className="col-md-6 " style={{paddingRight:'100px'}}>
                    {/* <h1>About me</h1> */}
                    <p>A self-motivated, hardworking student in IT, I seek an internship position at IT Company that will allow
me to explore career options and learn new technical skill in web development . I have completed intermediate projects in React js  . </p>
<Col className="d-flex justify-content-center flex-wrap">
                  
                  <div>
                    <a href="https://drive.google.com/file/d/1oMTO_33aw2UT0EgLhllz3cDJk0XkIdnw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-primary">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/ashikprodhan" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/ashik-prodhan-98b90011a/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
               </div>
            </div>
           
        </div>
    );
};

export default About;