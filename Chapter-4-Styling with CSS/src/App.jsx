import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from "./components/Skills/Skills.jsx";
import styles from "./components/Skills/Skills.module.css";

const App = () => {

  const skills = [
    {
      id: 1,
      image: "https://img.freepik.com/icones-gratis/html_318-788932.jpg",
      topic: "HTML5",
    },
    {
      id: 2,
      image: "https://static.vecteezy.com/system/resources/thumbnails/066/386/006/small_2x/the-css-logo-icon-free-png.png",
      topic: "CSS3"
    },
    {
      id: 3,
      image: "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png",
      topic: "JS"
    },
    {
      id: 4,
      image: "https://logospng.org/download/bootstrap/bootstrap-1536.png",
      topic: "BootStrap 5"
    },
    {
      id: 5,
      image: "https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png",
      topic: "Python"
    },
    {
      id: 6,
      image: "https://logodix.com/logo/1758903.png",
      topic: "Django"
    },
    {
      id: 7,
      image: "https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png",
      topic: "MySQL"
    },
    {
      id: 8,
      image: "https://technologypoint.in/wp-content/uploads/2021/06/MongoDB-sm-logo.gif",
      topic: "MongoDB"
    }
  ]
  return (
    <div>
      <Navbar />
      <Hero />
      <About />

      
        <h1 className={styles.heading}>Skills</h1>

        <div className={styles.cardContainer}>
          {skills.map((elem, idx) => (
            <Skills
              key={idx}
              image={elem.image}
              topic={elem.topic}
            />
          ))}
        </div>
      

    </div>
  )
}

export default App
