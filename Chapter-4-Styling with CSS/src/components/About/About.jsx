import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.image}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/060/157/941/small_2x/sumptuous-inspired-thoughtful-young-woman-with-laptop-no-background-with-transparent-background-free-png.png" alt="" />
        </div>
        <div className={styles.about}>
            <h1>About Me</h1><hr />
            <p>Hi, I'm Nirupama Majhi, a B.Tech student passionate about web development and creating modern, responsive web applications. I enjoy turning ideas into interactive digital experiences using clean, efficient code.

            I work with technologies like HTML, CSS, JavaScript, Bootstrap, React, Node.js, Express.js, MongoDB, and Python. I enjoy building projects that strengthen my problem-solving skills and help me learn new technologies.

            I'm continuously improving my skills in full-stack development, data structures, and modern JavaScript frameworks. My goal is to contribute to real-world projects, collaborate with talented teams, and grow as a software developer.

            When I'm not coding, I enjoy exploring new technologies, watching movies, and continuously learning through personal projects and coding challenges.</p>
        </div>
      </div>
    </div>
  )
}

export default About
