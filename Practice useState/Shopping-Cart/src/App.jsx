import React from 'react'
import { useState } from 'react'

const App = () => {

  const [items, setItems] = useState(0);
  const [total, setTotal] = useState(0);

  const products = [
    {
      id: 1,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.T_ZwPbBbO2m7cYdBYV0_cAHaEo?r=0&pid=Api&P=0&h=180",
      name: "Apple",
      price: 150,
    },
    {
      id: 2,
      image:
        "https://media2.popsugar-assets.com/files/thumbor/5bDtJLUd5u858BagEWhcAXZ8EG4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2012/11/47/1/192/1922195/574f46474ab2683d_shutterstock_49887109/i/Oranges.jpg",
      name: "Orange",
      price: 100,
    },
    {
      id: 3,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.RBV2Mdl8DBu5pauRXxoYbQHaEL?r=0&pid=Api&P=0&h=180",
      name: "Banana",
      price: 80,
    },
  ];

  function addToCart(product) {
    setItems(items + 1);
    setTotal(total + product.price);
  }

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>₹{product.price}/kg</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Cart Summary</h2>

        <h3>Items Added : {items}</h3>

        <h3>Total Price : ₹{total}</h3>
      </div>
    </div>
  );
};

export default App
