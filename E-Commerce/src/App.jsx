import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category_card from './components/Category_card'
import Product_card from './components/Product_card'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <h1>Our Featured Products</h1>
      <div className='product-cards'>
        <Category_card productImage="https://i.pinimg.com/originals/07/cc/f7/07ccf7c998a89af9aadc83389d5d692a.png" productDescription="Some quick example text to build on the card title and make up the bulk of the card’s content."/>
        <Category_card productImage="https://www.digitaltrends.com/wp-content/uploads/2022/11/Best_Black_Friday_Laptop_Deals.jpg?fit=720,479&p=1" productDescription="Some quick example text to build on the card title and make up the bulk of the card’s content."/>
        <Category_card productImage="https://imatrend.ro/wp-content/uploads/2025/03/1-1-700x700.jpg" productDescription="Some quick example text to build on the card title and make up the bulk of the card’s content."/>
        <Category_card productImage="https://i5.walmartimages.com/seo/Thrilos-Mens-Dress-Shirts-Long-Sleeve-Tops-Button-Up-Work-Shirts-Casual-Linen-Shirt-for-Men_a83fa707-733c-4ade-8b7f-e3830249b4bf.461456acfdc52787c7893f5a88604d2f.jpeg" productDescription="Some quick example text to build on the card title and make up the bulk of the card’s content."/>
      </div>
      <h1>Today's Deal</h1>
      <div>
        <Product_card todayImage="https://5desktop.com/download/wallpaper_316522_1920x1200.jpg?download" todayTitle="Zara Red Prom Dress" todayDescription="Make a statement at every celebration with this glamorous party gown featuring a modern design and premium-quality fabric." todayTimer="Last updated 3 mins ago"/>
      </div>
    </div>
  )
}

export default App
