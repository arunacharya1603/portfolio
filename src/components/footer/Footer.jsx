import React from 'react'
import './footer.css'
import {CiFacebook} from 'react-icons/ci'
import {CiInstagram} from 'react-icons/ci'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><p>Designed by </p>Arun Acharya</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#header">Header</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Service</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.facebook.com/arun.acharya.397948/"><CiFacebook /></a>
        <a href="https://instagram.com/arunacharya202"><CiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Arun Acharya. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
