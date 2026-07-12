import React from 'react'

const MovieComponent = (props) => {
  return (
    <>
      <div className='card-movie'>
        <img src={props.movieImage}/>
        <h2>{props.movieTitle}</h2>
        <p>Year:{props.movieYear}</p>
        <p>Rating:{props.movieRating}</p>
      </div>
    </>
  )
}

export default MovieComponent
