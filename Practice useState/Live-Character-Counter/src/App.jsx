import React, { useState } from 'react'

const App = () => {
  let [text,setText]=useState('')
  return (
    <div className='text'>
      <textarea id="text" rows={4} cols={40} placeholder='Enter text here'
      onChange={(e)=>{
        setText(e.target.value)
      }}
      ></textarea>
      <p>Characters:{text.replace(/\s/g, "").length}</p>
      <p>Words:{text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</p>
    </div>
  )
}

export default App
