import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-about.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
      <header>
        <div class="container header__container"><h5>Hello I'm </h5>
        <h1>Arun Acharya</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
      
      
  )
}

export default Header
