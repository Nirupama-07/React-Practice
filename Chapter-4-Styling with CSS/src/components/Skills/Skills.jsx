import React from 'react'
import styles from './Skills.module.css'

const Skills = (props) => {
    return (
        <div>
            <div className={styles.cardBody}>
                <img src={props.image} alt={props.topic} />
                <p>{props.topic}</p>
            </div>
        </div>
    )
}

export default Skills
