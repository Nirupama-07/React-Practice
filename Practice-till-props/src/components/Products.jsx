import React from 'react'

const Products = (props) => {
  return (
    <div className='container'>
    
      <div className='product-card'>
        <h2>{props.title}</h2>
        <h3>Brand:{props.brand}</h3>
        <h3>₹{props.price}</h3>
      </div>
    </div>
  )
}

export default Products
