import React from 'react'
import MovieComponent from './components/MovieComponent'
// import Products from './components/Products'

const App = () => {
  return (
    <>
        {/* <h1>Welcome to Product Section</h1>
        <div className='container'>
          <Products title="Laptop" brand="HP" price="80000" />
          <Products title="Bluetooth" brand="Realme" price="2000"/>
        </div> */}

        <h1>Choose Your Movie</h1>
        <div className='container'>
          <MovieComponent movieImage="https://www.koimoi.com/wp-content/new-galleries/2026/07/alpha-movie-review-4.jpg" movieTitle="Alpha" movieYear="2026" movieRating="7.9" />
          <MovieComponent movieImage="https://sm.mashable.com/mashable_in/seo/default/dhamaal4_8rp1.jpg" movieTitle="Dhamaal 4" movieYear="2026" movieRating="7.5"/>
        </div>
    </>
  )
}

export default App
