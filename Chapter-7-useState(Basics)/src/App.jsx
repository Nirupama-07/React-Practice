import React from 'react'
import Cards from './components/Cards'
import { useState } from 'react'

const App = () => {
  const [selectedCity, setSelectedCity] = useState({
    icon:'⛅',
    city: "Delhi",
    temp: 33
  });
  
  return (
    <div>
      <div className='flex flex-wrap w-fit justify-center items-center ml-56 mr-32'>
        <Cards
          icon={selectedCity.icon}
          temp={selectedCity.temp}
          city={selectedCity.city}
        />
      </div>
      <div className='text-center flex justify-evenly mt-20'>
        <button className='bg-blue-600 text-blue-50 rounded-2xl w-52 pt-4 pb-3 text-2xl font-bold cursor-pointer' 
          onClick={() =>
            setSelectedCity({
              icon:"⛅",
              city: "Delhi",
              temp: 33
            })}
            >Delhi
          </button>
        <button className='bg-blue-600 text-blue-50 rounded-2xl w-52 pt-4 pb-3 text-2xl font-bold cursor-pointer'
        onClick={() =>
            setSelectedCity({
              icon:"🌧️",
              city: "Mumbai",
              temp: 27
            })}
        >Mumbai</button>
        <button className='bg-blue-600 text-blue-50 rounded-2xl w-52 pt-4 pb-3 text-2xl font-bold cursor-pointer'
        onClick={() =>
            setSelectedCity({
              icon:"☀️",
              city: "Kolkata",
              temp: 43
            })}
        >Kolkata</button>
      </div>
        
    </div>


  )
}

export default App
