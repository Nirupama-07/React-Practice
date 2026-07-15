import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Home = (props) => {
  return (
    <div className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${props.heroImage})` }}>
      <Navbar/>
      <Content displayImage={props.displayImage} setHeroImage={props.setHeroImage}/>
    </div>
  )
}

export default Home
