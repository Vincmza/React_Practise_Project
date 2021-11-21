import React, {useState} from "react"
/*components*/
import Banner from "./components/Banner"
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [cart, updateCart] = useState([]);
  return (
    <div className="App">
      <Banner/>
      <div className="container">
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>    
      <Footer/>
    </div>
  );
}

export default App;
