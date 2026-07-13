import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.details}>
            <h2>Hi I am <span className={styles.name}>Nirupama Majhi</span></h2>
            <p>I am an aspiring python developer. I have skills in HTML5,CSS3,JS,BOOTSTRAP,React,Python,MySQL,MongoDB</p>
            <button className={styles.btn}>Contact Me</button>
        </div>

        <div className={styles.image}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/054/043/139/small_2x/3d-icon-smiling-woman-education-with-glasses-and-orange-shirt-working-on-a-laptop-isolated-on-transparent-background-png.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
