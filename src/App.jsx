import { useState } from 'react'
import "./assets/css/style.css";
import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Product from './components/Product';
import Review from './components/Review';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';


function App() {
  const[cart, setcart]=useState([]);
  const addToCart = (item) => {
    if(cart.length<=6){
      setcart([...cart, item]);
    }
  };
  const removeFromCart = (item) => {
    setcart(cart.filter((cartItem) => cartItem.img !== item.img));
};
  return (
    <>
      <div className="navhome">
        <Navbar cart={cart} removeFromCart={removeFromCart}/>
        <Home/>
      </div>

      <About />
      <Menu addToCart={addToCart}/>
      <Product addToCart={addToCart}/>
      <Review/>
      <Contact/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
