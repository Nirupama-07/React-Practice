import React from 'react'

const Cards = (props) => {
  return (
    <div className='bg-linear-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shadow-xl p-8 w-80'>
      <div className="flex justify-center mb-5">
        <div className="w-20 h-20 rounded-full bg-white text-blue-600 flex items-center justify-center text-3xl font-bold">
          {props.name ? props.name.charAt(0).toUpperCase() : "?"}
        </div>
      </div>
      <h1 className='text-2xl font-bold text-center text-blue-50 mb-4'>Welcome,{props.name}</h1>

      

      <p className="text-lg">
        👤 <span className="font-semibold">Name:</span> {props.name || "Not entered"}
      </p>

      <p className="text-lg mt-2">
        🎂 <span className="font-semibold">Age:</span> {props.age || "Not entered"}
      </p>

      <p className="text-lg mt-2">
        📍 <span className="font-semibold">City:</span> {props.city || "Not selected"}
      </p>
    </div>

  );
}

export default Cards
