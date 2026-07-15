import React from 'react'
import Header from './Header'
import CardBody from './CardBody'

const Cards = (props) => {
  return (
    <div>
      <div className="w-sm h-90 bg-blue-950 rounded-2xl text-center mt-32 pt-3">
        <Header/>
        <CardBody icon={props.icon} temp={props.temp} city={props.city}/>
      </div>
    </div>
  )
}

export default Cards
