import React from 'react'

const Category_card = (props) => {
  return (
    <div>

      <div className="card category-card">
        <img
          src={props.productImage}
          className="card-img-top"
          alt="Product"
        />

        <div className="card-body">
          <p className="card-text">
            {props.productDescription}
          </p>
        </div>
      </div>

    </div>
  )
}

export default Category_card
