import React from 'react'
import DestinationCard from './DestinationCard'

const Destination = (props) => {
  return (
    <div className="flex text-center flex-col mt-32 ml-50 mr-50">
      <h1 className="text-3xl text-purple-950 font-bold">Top Destination</h1>
      <p className="text-lg text-gray-700 mt-5 font-medium">Experience the World's top destinations like never before.</p>
      <div className="flex gap-10">
        <DestinationCard destinationCardsImages={props.destinationCardsImages}/>
        
      </div>
      
    </div>
  )
}

export default Destination
