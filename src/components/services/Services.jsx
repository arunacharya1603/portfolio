import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>User Research and Analysis.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Visual Design.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Responsive Design.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Interaction Design.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>UI Animation.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Website Design and Development.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Frontend Development.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Backend Development.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Web Application Development.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Responsive Web Design.</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>OPPs and DataBases</h3>
          </div>

          <ul className='service__list'>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Key Concept of OPPs.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Database Design.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Data Modeling.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Database Administration.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Data Analysis.</p>
            </li>
          </ul>
        </article>


        

      </div>
    </section>
  )
}

export default Services
