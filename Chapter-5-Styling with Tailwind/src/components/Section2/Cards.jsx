import React from 'react'

const Cards = (props) => {
  return (
    <div className='h-60 rounded-2xl flex gap-14'>
      {props.cardsImages.map((item) => (
        <div
          key={item.id}
          className="relative w-60 h-80 overflow-hidden rounded-2xl transition-transform hover:-translate-y-2"
        >
          <img
            src={item.image}
            // alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text */}
          <div className="absolute bottom-5 left-5 text-white z-10">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-md text-cyan-50 font-semibold">{item.location}</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Cards
