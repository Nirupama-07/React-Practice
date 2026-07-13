import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <div className={styles.nav}>
        <h3 className={styles.logo}>Logo</h3>
        <ul className={styles.list}>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
        </ul>
        <button className={styles.btn}>Login</button>
      </div>
    </div>
  )
}

export default Navbar
