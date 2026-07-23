import React from 'react'

const Navbar = () => {
  return (
    <div>
      

        <div className="absolute inset-0 "></div>
        <div className='relative z-10 flex gap-72 bg-amber-100 pl-28 ml-20 mr-16 py-2 rounded-4xl'>

          <h1 className='relative z-10 font-bold text-3xl text-green-500'>Pollus</h1>
          <div>
            <ul className='relative z-10 flex gap-10 pl-20'>
              <li className='text-2xl font-normal text-black'>Home</li>
              <li className='text-2xl font-normal text-black'>About</li>
              <li className='text-2xl font-normal text-black'>Images</li>
            </ul>
          </div>
          <div>
            <button className='rounded-[25px]  bg-green-600 text-white text-lg py-3  pr-3 pl-4 font-medium'>Sign up</button>
          </div>
        </div>
      </div>

    
  )
}

export default Navbar
