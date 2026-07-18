import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className="absolute inset-0 bg-black/20"></div>
        <h2 className='relative z-10 ml-20 mt-7 text-3xl font-bold bg-linear-to-r text-pink-900 bg-clip-text hover:text-white'>⮞Travel Plan</h2>
        <ul className='relative z-10 flex gap-20 ml-20 mt-7 mr-20 font-medium text-amber-50'>
            <li className='text-white hover:text-pink-400 text-lg transition duration-300 cursor-pointer'>Home</li>
            <li className='text-white hover:text-pink-400 text-lg transition duration-300 cursor-pointer'>Packages Tour</li>
            <li className='text-white hover:text-pink-400 text-lg transition duration-300 cursor-pointer'>Last Minute Travel</li>
            <li className='text-white hover:text-pink-400 text-lg transition duration-300 cursor-pointer'>Family Holiday</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
