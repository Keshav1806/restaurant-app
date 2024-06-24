import React from 'react'

const Cartitem = ({ item, index, removeFromCart }) => {

    return (
        <>
            <div className="cartitem" key={index}>
                <img src={item.img} alt="" />
                <div className="cartinfo">
                    <h3>Cart Item 0{index + 1}</h3>
                    <p>{item.normalprice}/-</p>
                </div>
                <span className="fas fa-times" onClick={()=> removeFromCart(item)}></span>
            </div>
        </>
    )
}

export default Cartitem
