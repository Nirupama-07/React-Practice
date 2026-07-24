import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Cards from './pages/Cards'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  const[cards,setCards]=useState([])

  useEffect(()=>{
    async function fetchImages() {
      console.log(import.meta.env.VITE_PEXELS_API_KEY)
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=eco house&per_page=10`,
        {
          headers: {
            Authorization: import.meta.env.VITE_PEXELS_API_KEY,
          },
        }
      )
      const data = await response.json()
      const formattedCards = data.photos.map((photo) => ({
        id: photo.id,
        image: photo.src.large,
        title: photo.alt || "Eco Friendly Home",
        description: "Enjoy peaceful eco-friendly stays surrounded by nature.",
      }));

      setCards(formattedCards);
    }
    fetchImages()
  }, [])

  
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Layout/>}/>
          <Route index element={ <Home/> } />

        <Route path="/about" element={<About/>}/>
        
        <Route path="/cards" element={<Cards cards={cards}/>}/>
      </Routes>
    </div>
  )
}

export default App
