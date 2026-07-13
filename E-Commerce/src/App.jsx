import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category_card from './components/Category_card'
import Product_card from './components/Product_card'

const App = () => {

  const products = [
    {
      id: 1,
      image: "https://i.pinimg.com/originals/07/cc/f7/07ccf7c998a89af9aadc83389d5d692a.png",
      description: "Make a statement at every celebration with this glamorous party gown."
    },
    {
      id: 2,
      image: "https://img.freepik.com/premium-photo/skin-care_1160677-1608.jpg",
      description: "An exquisite wedding makeup kit featuring intricate detailing and luxurious materials"
    },
    {
      id: 3,
      image: "https://bodyartguru.com/wp-content/uploads/2020/11/Nail-Extension-2.jpeg",
      description: "The best nail extensions to slay on every fashion weeks,events,family programs and many more."
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/ee/4a/12/ee4a1278043ca74cb2c94a182a0d6b8d.jpg",
      description: "Beautifully designed ethnic kurti made with premium fabric, combining traditional charm."
    }
  ]

  const dresses = [
    {
      id: 1,
      image: "https://i.pinimg.com/originals/73/6c/d5/736cd5394c992967d4ceb8999f72ca0a.jpg",
      title: "Floral Summer Dress",
      brand: "Zara",
      price: "₹2,499",
      description: "Lightweight floral dress perfect for summer outings and vacations."
    },
    {
      id: 2,
      image: "https://cdn.needlestyle.com/2024/07/lalokupfer_Strapless_Floral_Print_Maxi_Dress_for_woman_-ar_2_a83034a8-a900-4209-a237-019a09db00ac_0-e1721249729486.png",
      title: "Elegant Maxi Dress",
      brand: "H&M",
      price: "₹3,199",
      description: "Graceful maxi dress made with premium fabric for a sophisticated look."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400",
      title: "Denim Casual Dress",
      brand: "Levi's",
      price: "₹2,799",
      description: "Classic denim dress designed for everyday comfort and effortless style."
    },
    {
      id: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/815YbzmYOCL.jpg",
      title: "Party Wear Gown",
      brand: "Biba",
      price: "₹4,999",
      description: "Elegant party gown for weddings and special occasions."
    },
    {
      id: 5,
      image: "https://i.pinimg.com/originals/b7/51/28/b751285796801dead36bd37ad590457d.jpg",
      title: "Office Wear Dress",
      brand: "Allen Solly",
      price: "₹2,999",
      description: "Professional office wear dress with a modern fit."
    },
    {
      id: 6,
      image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/29650896/2024/5/20/dcd3cf16-f8f3-4724-9f9c-99ccfad0eb321716199777775NayoWomenFloralPrintedFlaredSleevesKurta1.jpg",
      title: "Cotton Kurti",
      brand: "W",
      price: "₹1,799",
      description: "Comfortable cotton kurti suitable for daily wear."
    },
    {
      id: 7,
      image: "https://i.pinimg.com/originals/1f/a4/5d/1fa45deb30e773ac62e8335adaa998e0.jpg",
      title: "Sweater Dress",
      brand: "ONLY",
      price: "₹3,499",
      description: "Warm and stylish sweater dress for winter fashion."
    },
    {
      id: 8,
      image: "https://i.pinimg.com/originals/e0/fc/00/e0fc0002ea01481cb8fffe9cca79462c.jpg",
      title: "Wedding Collection Dress",
      brand: "Manyavar Mohey",
      price: "₹8,999",
      description: "Premium wedding collection featuring luxurious fabric and elegant design."
    }
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <h1>Our Featured Products</h1>

      <div className="products-container">
        {products.map((elem) => {
          return (
            <Category_card
              key={elem.id}
              productImage={elem.image}
              productDescription={elem.description}
            />
          );
        })}
      </div>


      <h1 className="heading">Today's Deal</h1>

      <div className="todayDeals">
        {dresses.map((elem, idx) => {
          return (
            <Product_card
              key={idx}
              todayImage={elem.image}
              todayTitle={elem.title}
              todayBrand={elem.brand}
              todayDescription={elem.description}
              todayPrice={elem.price}
            />
          );
        })}
      </div>


    </div>
  )
}

export default App
