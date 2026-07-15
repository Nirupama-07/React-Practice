import React from 'react'
import Cards from './Cards'

const Deals = (props) => {
  return (
    <>
    <div className="absolute inset-0 bg-black/10"></div>

    <div className='flex flex-col gap-5 -mt-20 ml-50 mr-50 items-center bg-olive-50 rounded-3xl'>
      <h1 className='mt-7 font-bold text-3xl text-pink-900'>HOT DEALS</h1>
      <p className='text-gray-600 font-medium text-lg'>Fire up your savings with our hot deals</p>
      <Cards cardsImages={props.cardsImages}/>
    </div>
    </>
  )
}

export default Deals
