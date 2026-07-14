import React from 'react'
import Home from './components/Section1/Home'

const App = () => {
  const display=[
    {
      id:1,
      image:"https://images.pexels.com/photos/27732630/pexels-photo-27732630.jpeg?cs=srgb&dl=pexels-hadso-a-ahmed-814200213-27732630.jpg&fm=jpg"
    },
    {
      id:2,
      image:"https://img.freepik.com/premium-photo/neon-light-bridge-night_1205263-106804.jpg"
    },
    {
      id:3,
      image:"https://cdn.britannica.com/52/245552-050-3D7334F9/Eiffel-Tower-Paris.jpg"
    }
  ]
  return (
    <div>
      <Home displayImage={display}/>
    </div>
  )
}

export default App
