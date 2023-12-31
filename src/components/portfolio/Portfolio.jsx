import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Text Editor Website',
    github: 'https://github.com/arunacharya1603/Text-analyzer-app',
    demo: 'https://csb-ktttlo.vercel.app/'
  },

  // {
  //   id: 2,
  //   image: IMG2,
  //   title: 'Doctor Search Website',
  //   github: 'https://github.com/arunacharya1603/Doctoryy',
  //   demo: 'https://github.com/arunacharya1603/Doctoryy'
  // },

  {
    id: 2,
    image: IMG2,
    title: 'Calculator',
    github: 'https://arunacharya1603.github.io/OIBSIP_4/',
    demo: ' https://arunacharya1603.github.io/OIBSIP_4/'
  },

  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Medical Shop Billing System using tkinter(python)',
  //   github: 'https://github.com/arunacharya1603/Arun_Project/blob/main/ArunAcharya(143)DBMSProject.py',
  //   demo: 'https://github.com/arunacharya1603/Arun_Project/blob/main/ArunAcharya(143)DBMSProject.py'
  // },

  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Hindu News Web App using newsapi',
  //   github: 'https://github.com/arunacharya1603/News-app',
  //   demo: 'https://github.com/arunacharya1603/News-app'
  // },

  {
    id: 3,
    image: IMG3,
    title: 'to-do list(simple)',
    github: 'https://github.com/arunacharya1603/OIBSIP_6',
    demo: 'https://arunacharya1603.github.io/OIBSIP_6/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio',
    github: 'https://github.com/arunacharya1603/portfolio',
    demo: 'portfolio-phi-eight-47.vercel.app'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Weather App',
    github: 'https://github.com/arunacharya1603/Weather_app',
    demo: 'https://weather-app-1zvq.vercel.app/'
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
