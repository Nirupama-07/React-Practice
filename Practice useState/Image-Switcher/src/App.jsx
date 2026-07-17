import React from 'react'
import { useState } from 'react'

const App = () => {

  let[currentIndex,setCurrentIndex]=useState(0)

  let imageArr=[
    "https://static.vecteezy.com/system/resources/thumbnails/023/009/485/small_2x/abstract-animal-owl-portrait-with-colorful-double-exposure-paint-with-generative-ai-free-photo.jpeg",
    "https://abstractstockphotos.com/wp-content/uploads/AbstractStockPhotos_0001998-900x506.jpg",
    "https://abstractstockphotos.com/wp-content/uploads/AbstractStockPhotos_0000004-900x504.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/036/797/844/small_2x/ai-generated-an-abstract-painting-of-a-colorful-tree-and-leaves-free-photo.jpg"
  ]

  
  return (
    <div>
      <div className='card'>
        <img src={imageArr[currentIndex]} alt="" />
      </div>
      <div className='btn'>
        <button 
        onClick={()=>{
          if(currentIndex===imageArr.length-1){
            setCurrentIndex(0)
          }else{
            setCurrentIndex(currentIndex+1)
          }
          
        }}>Next</button>
        <button
        onClick={()=>{
          if(currentIndex==0){
            setCurrentIndex(imageArr.length-1)
          }else{
            setCurrentIndex(currentIndex-1)
          }
        }}
        >Previous</button>
      </div>
    </div>
  )
}

export default App
