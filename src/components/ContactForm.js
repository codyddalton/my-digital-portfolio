import Github from "./images/github.png";
import LinkedIn from "./images/linkedin.png"
import Proton from "./images/protonmail.png";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('default_service', 'template_email321', form.current, {
        publicKey: 'X3znslB3cSKKQdmfC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return(
        <form ref={form} onSubmit={sendEmail} className="Contact-form">
            <p className="Contact-me" style={{textShadow:"3px 1px 2px rgba(0,0,0,1)"}}>GET IN TOUCH</p>
            <div className="Form-top-row">
                <div className="Name-zone">
                    <label for="firstName-field" className="Form-label">FIRST NAME</label>
                    <input type="text" name="user_name" id="firstName-field" className="Input-field" maxLength="20" minLength="2"></input>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label for="email-field" className="Form-label">EMAIL</label>
                    <input id="email-field" className="Input-field" type="email" name="user_email" maxLength="320" minLength="3"></input>
                </div>
            </div>
            <div className="Form-second-row">
                <textarea className="Contact-content" name="message"></textarea>
            </div>
            <button className="Submit-contact" value="Send" type="Submit">SEND</button>
            <div className="Form-socials-row">
                <a href="https://github.com/CodyDDalton"><img src={Github} alt="Github" className="Social-icon" /></a>
                <a href="https://www.linkedin.com/in/cody-d-dalton"><img src={LinkedIn} alt="LinkedIn" className="Social-icon" /></a>
                <a href="mailto:cody_d_dalton@proton.me"><img src={Proton} alt="Proton Mail" className="Social-icon" /></a>
            </div>
        </form>
    )
}
export default ContactForm;