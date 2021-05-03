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
        <div className="container custom-form contact-form">
        <h4 className=" p-5">Contact Me </h4>
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
                                        <textarea name="message" placeholder="Write your Query" className="form-control" style={{width:'100%',height:'150px'}} ></textarea>
                                    </div>
                                    <div className="form-group">
                                   
                                   <input className="btn btn-info p-1" type="submit" value="Send" />
                                   {/* <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" /> */}
                               </div>
                                </div>
                        </div>
                    </form>
                
        
        </div>
        // <form className="contact-form" onSubmit={sendEmail}>
        //   <input type="hidden" name="contact_number" />
        //   <label>Name</label>
        //   <input type="text" name="user_name" />
        //   <label>Email</label>
        //   <input type="email" name="user_email" />
        //   <label>Message</label>
        //   <textarea name="message" />
        //   <input type="submit" value="Send" />
        // </form>
      );
};

export default Contact;



// import './ContactUs.css';

// export default function ContactUs() {


// }