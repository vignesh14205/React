// import './App.css';
// import List from './component/List';
// import ListObj from './component/ListObj';
// import Key from './component/Key';
// import ListObjDisp from './component/ListObjDisp';
// import BasicButtons from './component/ButtonMui';
// import BasicRating from './component/ButtonMui';
// function App() {
//   return (
//     <div>
//       <List/>
//       <ListObj/>
//       <Key/>
//       <ListObjDisp/>
//       <BasicButtons/>
//       <BasicRating/>
//     </div>
//   );
// }

// export default App;


// App.js
import React, { useState } from 'react';
import Product from './component/Product';
import Cart from './component/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // Add the product to the cartItems state
    setCartItems([...cartItems, product]);
  };

  const productData = {
    id: 1,
    name: 'Product Name',
    description: 'Product description',
    price: 19.99,
  };

  return (
    <div>
      <Product product={productData} onAddToCart={handleAddToCart}></Product>
      <Cart cartItems={cartItems}></Cart>
    </div>
  );
};

export default App;
