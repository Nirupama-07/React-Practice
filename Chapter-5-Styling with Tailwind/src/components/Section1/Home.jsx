import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Home = (props) => {
  return (
    <div className="bg-[url('https://wallpapers.com/images/hd/foggy-bridge-sunset-aesthetic-crk7uwgcuxruwxfu.jpg')] h-[90vh] bg-cover bg-center">
      <Navbar/>
      <Content displayImage={props.displayImage}/>
    </div>
  )
}

export default Home
