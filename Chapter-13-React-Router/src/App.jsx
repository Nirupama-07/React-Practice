import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Cards from './pages/Cards'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const cards=[
    {
      id:1,
      image:"https://images.ctfassets.net/9wfm2v6d5j1f/3NQmBAJWSAaWxLSB1jK2wY/f08ae011daebbd36fbd905f5861e2bba/Eco-friendly-house-design-ideas.jpg?w=1024&fm=webp",
      title:"Well Eco Friendly Homes",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ipsum ipsam quam beatae asperiores harum ipsa vitae quod error, sed ut odit corporis inventore. Inventore!"
    },
    {
      id:2,
      image:"https://imgcdn.stablediffusionweb.com/2024/11/4/a927140c-2cd8-4b95-b344-29de8536683f.jpg",
      title:"Sustainability living homes",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ipsum ipsam quam beatae asperiores harum ipsa vitae quod error, sed ut odit corporis inventore. Inventore!"
    },
    {
      id:3,
      image:"https://i.pinimg.com/originals/1c/8f/7d/1c8f7ddeb942d0f9bf2730c91f12f4b5.jpg",
      title:"Warm and peaceful air",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ipsum ipsam quam beatae asperiores harum ipsa vitae quod error, sed ut odit corporis inventore. Inventore!"
    },
    {
      id:4,
      image:"https://i.pinimg.com/originals/ac/ef/07/acef07f44c6365c290dc516102cc7d06.jpg",
      title:"Far from city noise",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ipsum ipsam quam beatae asperiores harum ipsa vitae quod error, sed ut odit corporis inventore. Inventore!"
    }
  ]
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cards" element={<Cards cards={cards}/>}/>
      </Routes>
    </div>
  )
}

export default App
