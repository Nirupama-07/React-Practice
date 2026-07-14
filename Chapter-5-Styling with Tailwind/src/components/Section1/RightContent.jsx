import React from 'react'

const RightContent = (props) => {
  return (
    <div className='relative mt-30 w-full overflow-hidden'>
    <div className="absolute inset-0"></div>
      <div className='relative z-10 flex gap-6 overflow-x-auto px-6 [&::-webkit-scrollbar]:hidden hide-scrollbar'>
        {props.displayImage.map((item) => (
        <img
          key={item.id}
          src={item.image}
          alt=""
          className="w-70 h-80 object-cover rounded-3xl shrink-0"
        />
      ))}
      </div>
    </div>
  )
}

export default RightContent
