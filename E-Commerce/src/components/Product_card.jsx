import React from 'react'

const Product_card = (props) => {
  return (
    <div>
      <div className="card today text-bg-dark">
        <img src={props.todayImage} className="card-img" alt="..."/>
        <div className="card-img-overlay">
          <h5 className="card-title">{props.todayTitle}</h5>
          <p className="card-text">{props.todayDescription}</p>
          <p className="card-text"><small>{props.todayTimer}</small></p>
        </div>
      </div>
    </div>
  )
}

export default Product_card
