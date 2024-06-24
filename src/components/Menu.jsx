import React from 'react'
import {menu} from "../data"
const Menu = ({addToCart}) => {
    return (
        <>
            <div className="menu">
                <h1>OUR <span>MENU</span></h1>
                <div className="menucont">
                    {menu.map((item, index) => (
                    <div key={index} className="menuitem">
                        <img src={item.img} alt="no img" />
                        <h3>{item.name}</h3>
                        <p>{item.normalprice} <span>{item.cutprice}</span></p>
                        <button onClick={() => addToCart(item)}>Add To Cart</button>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu
