import React from 'react'
import Home from './components/Section1/Home'
import Deals from './components/Section2/Deals'

const App = () => {

  

  const display=[
    {
      id:1,
      image:"https://images.pexels.com/photos/27732630/pexels-photo-27732630.jpeg?cs=srgb&dl=pexels-hadso-a-ahmed-814200213-27732630.jpg&fm=jpg",
      
    },
    {
      id:2,
      image:"https://img.freepik.com/premium-photo/neon-light-bridge-night_1205263-106804.jpg",
      
    },
    {
      id:3,
      image:"https://cdn.britannica.com/52/245552-050-3D7334F9/Eiffel-Tower-Paris.jpg",
      
    }
  ]

  const cardsData=[
    {
      id:1,
      image:"https://imgstower.ytn.co.kr/gallery/2017/201711081629230080.jpg",
      title:"Seoul Tower",
      location:"Seoul,South Korea"
    },
    {
      id:2,
      image:"https://i.pinimg.com/originals/b5/02/3b/b5023be87fa1804a5bcc0c4a16b9e55b.jpg",
      title:"Budha Tower",
      location:"Sikkim,India"
    },
    {
      id:3,
      image:"https://i.pinimg.com/originals/13/c1/4e/13c14efb8e56a8a87c324ba282dad8ad.jpg",
      title:"Bali Tower",
      location:"Bali"
    },
    {
      id:4,
      image:"https://thumbs.dreamstime.com/b/plaza-de-espana-spain-square-seville-andalusia-located-parque-maria-luisa-vertical-famous-201763400.jpg",
      title:"Plaza De Espana",
      location:"Spain"
    }
  ]
  return (
    <div>
      <Home displayImage={display}/>
      <Deals cardsImages={cardsData}/>
    </div>
  )
}

export default App
