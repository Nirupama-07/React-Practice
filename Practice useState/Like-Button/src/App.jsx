import React from 'react'
import { useState } from 'react'

const App = () => {
  const[like,setLike]=useState(0)
  const[message,setMessage]=useState("")
  return (
    <div className='card'>
      <img src="https://wallpaperaccess.com/full/5101318.jpg" alt="" />
      <p>{message}</p>
      <p>❤️ Likes:{like}</p>
      <div>
        <button onClick={()=>{
          setLike(like+1)
        }}>Like</button>
        <button onClick={()=>{
          if(like>0){
            setLike(like-1)
          }else{
            setMessage("Cannot be less than 0")
          }
          
        }}
        >Dislike</button>
        <button onClick={()=>{
          setLike(0)
        }}>Reset</button>
      </div>
    </div>
  )
}

export default App
