import './App.css';
import Banner from "./components/Banner"
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner/>
      <div className="container">
        <Cart/>
        <ShoppingList/>
      </div>    
      <Footer/>
    </div>
  );
}

export default App;
