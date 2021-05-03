import { faBootstrap, faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import photo1 from '../../images/assignment9.PNG';
import mobilerepair from '../../images/mobile-repair.PNG';
import freshMart from '../../images/freshMart.PNG';
import express from '../../images/skill-img/express.svg'
import reactRouter from '../../images/skill-img/react-router.svg'
import mongodb from '../../images/skill-img/mongodb.svg'
import './Project.css'
const Project = () => {
    return (
        <div id="project" className="container">
            <h5 className="text-center" >Projects</h5>
            <div className="row">
               
               
                <div className="col-lg-4">
                    <div className="card  card-custom ">
                        <img src={freshMart} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Fresh valley</h5>
                            <p className="card-text">This travelling site .Once you click on the vehicle it will take you to destination page .It has firebase authentication .If you are logged in only you can see destination page .In destination page you will see travel fare ,photo of vehicle and google map</p>
                            
                           
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <h4>Technology</h4>
                                <FontAwesomeIcon  className="m-1" icon={faReact} />
                            <FontAwesomeIcon  className="m-1"icon={faHtml5} />
                            <FontAwesomeIcon  className="m-1" icon={faCss3} />
                            <FontAwesomeIcon className="m-1" icon={faJsSquare} />
                            <FontAwesomeIcon className="m-1" icon={faNodeJs} />
                            <img className="m-1 img-fluid" style={{width:"30px"}} src={express} alt=""/>
                            <img className="m-1 img-fluid" style={{width:"30px"}} src={mongodb} alt=""/>
                            <img className="m-1 img-fluid" style={{width:"20px"}} src="https://img.icons8.com/color/452/firebase.png" alt=""/>
                            
                           
                            
                            <img className="m-1 img-fluid" style={{width:"20px"}} src={reactRouter} alt=""/>

                            </div>
                            <div className="card-text mt-5">

                            <a className="m-3 text-decoration-none text-dark " href="https://fresh-valley-c3e36.web.app/" target="_blank">live link</a>
                            <a className="m-3" href="https://github.com/Porgramming-Hero-web-course/react-auth-ashikprodhan" target="_blank"  ><FontAwesomeIcon icon={faGithub} /> </a>
                        
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-custom ">
                        <img src={mobilerepair} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Mobile repair</h5>
                            <p className="card-text">This travelling site .Once you click on the vehicle it will take you to destination page .It has firebase authentication .If you are logged in only you can see destination page .In destination page you will see travel fare ,photo of vehicle and google map</p>
                            
                           
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <h4>Technology</h4>
                            <FontAwesomeIcon  className="m-1" icon={faReact} />
                            <FontAwesomeIcon  className="m-1"icon={faHtml5} />
                            <FontAwesomeIcon  className="m-1" icon={faCss3} />
                            <FontAwesomeIcon className="m-1" icon={faJsSquare} />
                            <img className="m-1 img-fluid" style={{width:"30px"}} src={express} alt=""/>
                            <img className="m-1 img-fluid" style={{width:"30px"}} src={mongodb} alt=""/>
                            <img className="m-1 img-fluid" style={{width:"20px"}} src="https://img.icons8.com/color/452/firebase.png" alt=""/>
                            
                            <img className="m-1 img-fluid" style={{width:"20px"}} src="https://seeklogo.com/images/R/react-spring-logo-757E1EF5B5-seeklogo.com.png" alt=""/>
                            
                            <img className="m-1 img-fluid" style={{width:"20px"}} src={reactRouter} alt=""/>

                            </div>
                            <div className="card-text mt-5">

                            <a className="m-3 text-decoration-none text-dark " href="https://city-travellers.web.app/" target="_blank">live link</a>
                            <a className="m-3" href="https://github.com/Porgramming-Hero-web-course/react-auth-ashikprodhan" target="_blank"  ><FontAwesomeIcon icon={faGithub} /> </a>
                        
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-custom">
                        <img src={photo1} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">City traveller</h5>
                            <p className="card-text">This travelling site .Once you click on the vehicle it will take you to destination page .It has firebase authentication .If you are logged in only you can see destination page .In destination page you will see travel fare ,photo of vehicle and google map</p>
                            
                           
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <h4>Technology</h4>
                            <FontAwesomeIcon  className="m-1" icon={faReact} />
                            <FontAwesomeIcon  className="m-1"icon={faHtml5} />
                            <FontAwesomeIcon  className="m-1" icon={faCss3} />
                            <FontAwesomeIcon className="m-1" icon={faJsSquare} />
                            <img className="m-1 img-fluid" style={{width:"30px"}} src={express} alt=""/>
                            <img className="m-1 img-fluid" style={{width:"20px"}} src="https://img.icons8.com/color/452/firebase.png" alt=""/>
                            
                            <img className="m-1 img-fluid" style={{width:"20px"}} src={reactRouter} alt=""/>

                            </div>
                            <div className="card-text mt-5">

                            <a className="m-3 text-decoration-none text-dark " href="https://city-travellers.web.app/" target="_blank">live link</a>
                            <a className="m-3" href="https://github.com/Porgramming-Hero-web-course/react-auth-ashikprodhan" target="_blank"  ><FontAwesomeIcon icon={faGithub} /> </a>
                        
                            </div>
                        </div>

                    </div>
                </div>
                
                
            </div>

              {/* <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Sunset</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
       <a href="" class="btn btn-outline-success btn-sm">Read More</a>
        <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
      </div> */}
     

        </div>
    );
};

export default Project;