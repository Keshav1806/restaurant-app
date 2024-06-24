import React, { useRef } from 'react'
import Cartitem from './Cartitem';


const Navbar = ({cart, removeFromCart}) => {
    const searchRef = useRef();
    const cartref = useRef();
    const menuref = useRef();
    
    const searchHandler = () => {
        searchRef.current.classList.toggle("active");
        cartref.current.classList.remove("active");
        menuref.current.classList.remove("active");
    };
    const cartHandler = () => {
        cartref.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        menuref.current.classList.remove("active");
    };
    const menuHandler = () => {
        menuref.current.classList.toggle("active");
        cartref.current.classList.remove("active");
        searchRef.current.classList.remove("active");
    };
    return (
        <>
            <div className="nav">
                <img src="https://github.com/walifile/react-resturant-website-theme/blob/main/src/assets/images/logo.png?raw=true" alt="no img" />
                <div className="links" ref={menuref}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Menu</a>
                    <a href="#">Products</a>
                    <a href="#">Review</a>
                    <a href="#">Contact</a>
                    <a href="#">Blogs</a>
                </div>
                <div className="icons">
                    <div className="fas fa-search" id="search-btn" onClick={searchHandler}></div>
                    <div className="fas fa-shopping-cart" id="cart-btn" onClick={cartHandler}></div>
                    <div className="fas fa-bars" id="menu-btn" onClick={menuHandler}></div>
                </div>
                
                <div className="search-form" ref={searchRef}>
                    <input type="search" id="search-box" placeholder="search here..." />
                    <label htmlFor="search-box" className="fas fa-search"></label>
                </div>
                <div className="cartcont" ref={cartref}>
                    {cart.map((item, index) =>(
                        <Cartitem item={item} index={index} removeFromCart={removeFromCart}/>
                    ))}
                    {cart.length===0?<p className='cartmess'>Cart is empty</p>: <a className='check'>
                        Checkout Now
                        </a>}
                </div>
            </div>
        </>
    )
}

export default Navbar
