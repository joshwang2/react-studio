import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  function addToCart(item) {
    setCartItems([...cartItems, item]);
    setPrice(price + item.price);
  }

  return (
    <div className="App">

      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem item={item} addToCart={addToCart} price={price} />
          // <p>Bakery Item {index}</p> 
      ))}

      <div>
        <h2>Cart</h2>
          {cartItems.map((item, index) => (<p>{item.name}</p>))}
        {/* TODO: render a list of items in the cart */}
      </div>

      <p>
        <p>Total price: ${Math.round(100*price)/100}</p>
      </p>
    </div>
  );
}

export default App;
