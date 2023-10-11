import React from "react";
import './cart.css';
import cart from '../../assets/cart.svg';
import ShoppingCart from "../shoppingCart/shoppingCart";

export default function Cart({inCart}){
    const [scActive, setScActive] = React.useState(false);
  
    const handleSetPopup = (isOpen) => {
        setScActive(isOpen);
    };

    return <div className="cart" onMouseEnter={()=>handleSetPopup(true)} onMouseLeave={()=>handleSetPopup(false)}>
        {inCart.length ? <div className="badge"><span>{inCart.length}</span></div> : null}
        <img src={cart} className="icon-cart" alt="shoppingCart" />
        <p>Shopping Cart</p>
        {scActive && <ShoppingCart itemsInCart={inCart}></ShoppingCart>}
    </div>
}