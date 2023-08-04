import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Text Editor Website',
    github: 'https://github.com/arunacharya1603/Text-analyzer-app',
    demo: 'https://26cszt-3000.csb.app/'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Doctor Search Website',
    github: 'https://github.com/arunacharya1603/Doctoryy',
    demo: 'https://github.com/arunacharya1603/Doctoryy'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Calculator',
    github: 'https://github.com/arunacharya1603/Calculator',
    demo: ' https://arunacharya1603.github.io/Calculator/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Medical Shop Billing System using tkinter(python)',
    github: 'https://github.com/arunacharya1603/Arun_Project/blob/main/ArunAcharya(143)DBMSProject.py',
    demo: 'https://github.com/arunacharya1603/Arun_Project/blob/main/ArunAcharya(143)DBMSProject.py'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Hindu News Web App using newsapi',
    github: 'https://github.com/arunacharya1603/News-app',
    demo: 'https://github.com/arunacharya1603/News-app'
  },

  {
    id: 6,
    image: IMG6,
    title: 'to-do list(simple)',
    github: 'https://github.com/arunacharya1603/OIBSIP_6',
    demo: 'https://arunacharya1603.github.io/OIBSIP_6/'
  },

]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent Works
      </h5>

      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer" >Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portfolio
