import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/thinkBridge.png'
import IMG2 from '../../assets/logo.png'
import IMG3 from '../../assets/book-stack.png'
import IMG4 from '../../assets/git.jpg'
import IMG5 from '../../assets/weather.png'
import IMG6 from '../../assets/blog.jpg'
import IMG7 from '../../assets/shopping.png'
import IMG8 from '../../assets/advocate.png'



const data = [
  


  {
    id: 1,
    image: IMG1,
    title: 'ThinkBridge(Appwrite-backend-service)',
    github: 'https://github.com/arunacharya1603/blog-appwrite',
    demo: 'https://think-bridge.vercel.app/' // Fixed URL/ Fixed URL
  },

  
 {
    id: 2,
    image: IMG2,
    title: 'reduxThunk-Food-api',
    github: 'https://github.com/arunacharya1603/Food-Redux',
    demo: 'https://food-redux-eight.vercel.app/' // Fixed URL
  },
  {
    id: 3,
    image: IMG3,
    title: 'Google-Books-Api',
    github: 'https://github.com/arunacharya1603/google-books-api',
    demo: 'https://google-books-api-tawny.vercel.app/' // Fixed URL
  },
  {
    id: 4,
    image: IMG4,
    title: 'Github-profile(github-api)',
    github: 'https://github.com/arunacharya1603/Github-UserProfile-project',
    demo: 'https://weather-app-js-project-hazel.vercel.app/' // Fixed URL
  },


    {
    id: 5,
    image: IMG5,
    title: 'Weather App (Weather api)',
    github: 'https://github.com/arunacharya1603/Weather_app',
    demo:'https://weather-app-js-project-hazel.vercel.app/'
  },

    {
    id: 6,
    image: IMG6,
    title: 'Blog-Web-app(frontend)',
    demo: 'https://blog-app-front-end-neon.vercel.app/',
    github: 'https://github.com/arunacharya1603/Blog-app-Front-end-'
  },
  
  
  {
    id: 7,
    image: IMG7,
    title: 'Shopping E-Commerce(frontend)',
    github: 'https://github.com/arunacharya1603/shop',
    demo: 'https://shoppingcart-pink-three.vercel.app/'
  },


  {
    id: 8,
    image: IMG3,
    title: 'CRUD Web app(Dummy)',
    github: 'https://github.com/arunacharya1603/CRUD',
    demo: ' https://crud-mocha.vercel.app/'
  },


  {
    id: 9,
    image: IMG8,
    title: 'Adv. Ashwani Portfolio',
    github: 'https://github.com/arunacharya1603/ashwani-acharya-portfolio',
    demo: 'https://ashwani-acharya-portfolio.onrender.com/'
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
                  <h3>{title}</h3>
                </div>
                
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
