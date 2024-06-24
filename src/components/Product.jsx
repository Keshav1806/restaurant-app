import React, { useState } from 'react'
import { product } from "../data"
const Product = ({ addToCart }) => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleHeartClick = (index) => {
        setClickedIndex(index === clickedIndex ? null : index);
    };
    
    const [clickIndex, setClickIndex] = useState(null);
    const handleEyeClick = (index) => {
        setClickIndex(index === clickIndex ? null : index);
    };
    return (
        <>
            <div className="product">
                <h1>OUR <span>PRODUCTS</span></h1>
                <div className="prodcont">
                    {product.map((item, index) => (
                        <div className="proditem" key={index}>
                            <div className="icons">
                                <div className="fas fa-shopping-cart" onClick={() => addToCart(item)}></div>
                                <div className="fas fa-heart" onClick={() => handleHeartClick(index)} style={{ color: clickedIndex === index ? "red" : "white" }}></div>
                                <div className="fas fa-eye" onClick={()=> handleEyeClick(index)}></div>
                            </div>
                            <img className={clickIndex===index? "prodimg active1": "prodimg"} src={item.img}  alt="no img" />
                            <div className={clickIndex===index? "prodinfo active2": "prodinfo"}>
                                <h3>Fresh Coffee</h3>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <p>{item.normalprice} <span>{item.cutprice}</span></p>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Product
