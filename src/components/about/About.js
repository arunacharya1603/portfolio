import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { TbAward } from 'react-icons/tb'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAward className='about__icon' />
              <h5>Experience and Internships</h5>
              <small>2 Internship </small>
            </article>


            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Certification Course</h5>
              <small>10+ Certification Course</small>
            </article>


            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>Hello there! I'm Arun Acharya, a passionate and dedicated fresher developer with a strong desire to dive headfirst into the dynamic world of Web development. With a solid foundation in Web Development principles and a thirst for continuous learning, I am committed to bringing innovation and creativity to every project I tackle.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About
