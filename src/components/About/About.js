import React from 'react';
import './About.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ashik from '../../images/ashik.jpg'
const About = () => {
    return (
        <div id="about">
            <div className="row">
                <div className="col-md-6">
                   <img style={{width:'300px'}} src={ashik} alt=""/> 
                </div>
                <div className="col-md-6 mt-5">
                    <h1>This is Ashik</h1>
                    <p>A self-motivated, hardworking student in IT, I seek an internship position at big Company that will allow
me to explore career options and learn new technical skill in web development . I have completed advanced projects in React js  . </p>
                    
               </div>
            </div>
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
                    <a href="https://www.linkedin.com/in/abubakar-siddik-ashik-98b90011a/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
        </div>
    );
};

export default About;