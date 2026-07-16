import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  
 const [message,setMessage]=useState("Maximum is 20")

  return (
    <div>
      <div className='bg-emerald-200 text-2xl text-amber-950 w-2xl h-52 ml-16 mt-8 text-center pt-16 font-bold'>
    
        <h3>{message}</h3>
        {counter}
      </div>
      <div className='flex gap-20 ml-20 mt-12'>
        <button className='bg-blue-800 text-2xl text-white pt-2 pl-3 pr-3 pb-2 rounded-2xl cursor-pointer'
          onClick={() => {
            if (counter < 20) {
              setCounter(counter + 1);
            } else {
              setMessage("Maximum limit reached");
            }
          }}>Increase</button>
        <button className='bg-blue-800 text-2xl text-white pt-2 pl-3 pr-3 pb-2 rounded-2xl cursor-pointer'
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1)
              
            } else {
              setMessage("Value cannot be negative")
            }


          }}>Decrease</button>
        <button className='bg-blue-800 text-2xl text-white pt-2 pl-3 pr-3 pb-2 rounded-2xl cursor-pointer'
          onClick={() => {
            setCounter(0)
            setMessage("Maximum limit is 20")

          }}>Reset</button>
        <button className='bg-blue-800 text-2xl text-white pt-2 pl-3 pr-3 pb-2 rounded-2xl cursor-pointer'
          onClick={() => {
            if ((counter*2)>20){
              setMessage("Maximum limit exceed")
            }else{
              setCounter(counter * 2)
            }
            
          }}>Double</button>
      </div>
    </div>
  )
}

export default App
