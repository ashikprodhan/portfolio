import React from 'react';
import './Contact.css'

import emailjs from 'emailjs-com';
const Contact = () => {

    const sendEmail=(e)=> {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_lb8chkz', e.target, 'user_7hPCzv7Rre7pnW12u0Ioc')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);

          });
          e.target.reset();
      }
    
      return (
        <div id="contact" className="mt-5 container custom-form contact-form">
        
        <h1 className=" p-5">Contact Me </h1>
                  <form  onSubmit={sendEmail}>
        
        
        
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group p-1">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name *" />
                                </div>
                                <div className="form-group p-1">
                                    <input type="text" name="email" className="form-control" placeholder="Your Email *" />
                                </div>
                                <div className="form-group p-1">
                                    <input type="text" name="phone" className="form-control" placeholder="Your Phone Number *" />
                                </div>
                              
                                
                            </div>
                            <div className="col-md-6">
                                    <div className="form-group p-1">
                                        <textarea name="message" placeholder="Write your Query" className="form-control" style={{width:'100%',height:'130px'}} ></textarea>
                                    </div>
                                   
                                </div>
                                <div className="form-group p-1">
                                   
                                   <input className="btn btn-info p-1 blockButton" type="submit" value="Send" />
                                   {/* <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" /> */}
                               </div>
                        </div>
                    </form>
                
        
        </div>
        
      );
};

export default Contact;



// import './ContactUs.css';

// export default function ContactUs() {


// }