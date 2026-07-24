import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate()

  function handleClick(){
    navigate("/cards")
  }
  return (
    <div>
      <div className='flex gap-28 pl-28 ml-20 mr-16 py-2 mt-10'>
        <div>
            <img src="https://i.pinimg.com/originals/95/0d/b8/950db88b6a1fa94ad7c359600b3ac8e0.webp" className='w-87.5 rounded-2xl' alt="" />
        </div>
        <div className='w-125 mt-10'>
            <h1 className='font-bold text-green-600 text-2xl'>Welcome on Treopps!</h1>
            <p className='font-light text-gray-600 text-lg mt-11'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde a enim at porro neque nihil, maxime dolor perferendis doloribus, ea dignissimos quidem quam necessitatibus illum.</p>
            <button className='bg-green-500 text-white py-5 px-6 rounded-2xl mt-8' onClick={handleClick}>Explore Now</button>
        </div>
      </div>
    </div>
  )
}

export default About
