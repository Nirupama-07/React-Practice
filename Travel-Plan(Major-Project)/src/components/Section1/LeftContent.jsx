import React from 'react'

const LeftContent = () => {
  return (
    <div className='ml-30 mt-40'>
      <div className="absolute inset-0 bg-black/10"></div>

      <h1 className='relative z-10 text-5xl w-md text-olive-50 font-semibold  leading-16'>Explore Beautiful World With US</h1>
      <p className='relative z-10 text-base w-md text-olive-50 font-medium mt-5'>"Let us take the hassle out of travel planning, so you can focus on the adventure ahead."</p>
      <button className="relative z-10 mt-5 w-40 bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg shadow-lg shadow-fuchsia-500/50 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-fuchsia-500/70 hover:cursor-pointer">
        Discover Now
      </button>
    </div>
  )
}

export default LeftContent
