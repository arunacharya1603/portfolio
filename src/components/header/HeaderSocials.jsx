import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/arunacharya1603/" target='_blank' rel="noopener noreferrer">
        <BsLinkedin />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="https://github.com/arunacharya1603" target='_blank' rel="noopener noreferrer">
        <FaGithub />
        <span className="sr-only">GitHub</span>
      </a>
      {/* Removed the empty link */}
    </div>
  );
};

export default HeaderSocials;
