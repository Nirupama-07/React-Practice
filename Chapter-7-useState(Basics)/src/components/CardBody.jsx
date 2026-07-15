import React from 'react'

const CardBody = (props) => {
  return (
    <div>
      <div className='flex flex-col mt-7 leading-[3] w-[90%] bg-blue-900 ml-5 mr-10 p-6 gap-4 rounded-2xl'>
        <h2 className='text-7xl'>{props.icon}</h2>
        <h4 className='text-2xl mt-5 font-semibold text-white'>{props.temp}</h4>
        <h5 className='text-xl font-medium text-white'>{props.city}</h5>
      </div>
    </div>
  )
}

export default CardBody
