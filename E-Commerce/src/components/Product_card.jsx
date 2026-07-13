import React from 'react'

const Product_card = (props) => {
  return (
    <div>
      <div className="card today">
        <img src={props.todayImage} className="card-img" alt={props.todayTitle} />

        <div className="card-img-overlay">
          <h5>{props.todayTitle}</h5>
          <h6>{props.todayBrand}</h6>
          <p>{props.todayDescription}</p>
          <h5>{props.todayPrice}</h5>
        </div>
      </div>
    </div>
  )
}

export default Product_card
