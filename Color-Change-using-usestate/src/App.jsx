import React, { useState } from 'react'

const App = () => {
  const[color,setColor]=useState({
    backgroundColor:"white",
    color:"black",
    fontSize:"15px"
  })

  return (
    <div className='flex justify-center items-center gap-28' style={color}>
      Color are changing
      <button 
        className='bg-blue-700 pt-4 pr-3 pl-5 pb-5 rounded-2xl text-2xl text-white cursor-pointer' 
        onClick={()=>{
          setColor({
            backgroundColor:"white",
            color:"black",
            fontSize:"20px",
            height:"100vh"
          })
        }}
      >Light Theme
      </button>
      <button 
        className='bg-blue-700 pt-4 pr-3 pl-5 pb-5 rounded-2xl text-2xl text-white cursor-pointer' 
        onClick={()=>{
          setColor({
            backgroundColor:"black",
            color:"white",
            fontSize:"32px",
            height:"100vh"
          })
        }}
      >Dark Theme
      </button>
      <button 
        className='bg-blue-700 pt-4 pr-3 pl-5 pb-5 rounded-2xl text-2xl text-white cursor-pointer' 
        onClick={()=>{
          setColor({
            backgroundColor:"blue",
            color:"red",
            fontSize:"40px",
            height:"100vh"
          })
        }}
      >Blue Theme
      </button>
    </div>
  )
}

export default App
