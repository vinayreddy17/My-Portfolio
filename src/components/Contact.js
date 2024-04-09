import React from 'react';
import location from '../assets/location.png';
import mail from '../assets/mail.jpeg'
import './Contact.css';

function Contact() {
  return (
    <section id='Contact'>
      <div className='contact'>
      <div className="title">
            <h1>CONTACT</h1>
            <h3>Open for exciting opportunities - drop me a message!</h3>
          </div>
          <div className='details'>
            <div className='location'> 
           <img className='location_icon'  src={location}/>
           <div className='location_text'>
           <h3>Location</h3>
                <p>Hyderabad, India</p>
                </div>
          </div>
          <div className='mail'>
           <img  className='mail_icon' src={mail}/>
           <div  className='location_text'>
                <h3>Mail</h3>
                <a href="mailto:vinaykumaramireddy@gmail.com">vinaykumaramireddy@gmail.com</a>
              </div>
          </div>
          </div>
      </div>

    </section>
  )
}

export default Contact