import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {LiaFacebookMessenger} from 'react-icons/lia'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yfemk6o', 'template_j0lcve7', form.current, 'AKNC8iSCA7ApUEcnc')

    e.target.reset();
      
  };
  return (
    <section id='contact'>
    <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>arun@mail.com</h5>
            <a href="mailto:arun2k20it@gmail.com" target='_blank' rel="noreferrer" >Send a message</a>
          </article>

          <article className='contact__option'>
          <LiaFacebookMessenger className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>arunacharya202</h5>
            <a href="https://m.me/arun.acharya.397948" target='_blank' rel="noreferrer" >Send a message</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>





      </div>
    </section>
  )
}

export default Contact
