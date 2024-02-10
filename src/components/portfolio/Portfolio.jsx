import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/git.jpg'
// import IMG8 from '../../assets/blog.jpg'



const data = [
  


  // {
  //   id: 1,
  //   image: IMG8,
  //   title: 'Blog-app (MERN)',
  //   github: 'https://github.com/arunacharya1603/Blog-app',
  //   demo: 'https://meek-eclair-b74a61.netlify.app' // Fixed URL
  // },

  
 {
    id: 1,
    image: IMG2,
    title: 'Shopping Website(Front-End Project)',
    github: 'https://github.com/arunacharya1603/shop',
    demo: 'https://shoppingcart-pink-three.vercel.app' // Fixed URL
  },
  {
    id: 2,
    image: IMG5,
    title: 'Blog-App (Front-end)',
    github: 'https://github.com/arunacharya1603/Blog-app-front-end',
    demo: 'https://blog-app-front-end-neon.vercel.app' // Fixed URL
  },
  {
    id: 3,
    image: IMG5,
    title: 'Portfolio',
    github: 'https://github.com/arunacharya1603/portfolio',
    demo: 'https://portfolio-phi-eight-47.vercel.app' // Fixed URL
  },


    {
    id: 4,
    image: IMG4,
    title: 'Weather App (Weather api)',
    github: 'https://github.com/arunacharya1603/Weather_app',
    demo: 'https://weather-app-1zvq.vercel.app/'
  },

    {
    id: 5,
    image: IMG7,
    title: 'Github-UserProfile (using Github API)',
    github: 'https://github.com/arunacharya1603/Github-UserProfile-project',
    demo: 'https://github-user-profile-project.vercel.app/'
  },
  
  
  {
    id: 6,
    image: IMG1,
    title: 'Text Editor Website',
    github: 'https://github.com/arunacharya1603/Text-analyzer-app',
    demo: 'https://csb-ktttlo-dpvwdwyry-arunacharya1603.vercel.app/'
  },


  {
    id: 7,
    image: IMG3,
    title: 'Calculator',
    github: 'https://github.com/arunacharya1603/Calculator',
    demo: ' https://arunacharya1603.github.io/Calculator/'
  },


  {
    id: 8,
    image: IMG4,
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
