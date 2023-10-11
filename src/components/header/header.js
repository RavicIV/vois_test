import React from "react";
import Cart from "../cart/cart";

import './header.css';

export default function Header(props) {
  return (
    <div className="header">
    <h4>Hallo world</h4>
    <Cart inCart={props.cart}></Cart>
    </div>
  );
}
