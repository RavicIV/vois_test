import React from "react";
import Item from "../item/item";

import './shop.css';

export default function Shop({items}) {
  return (
    <div className="shop">
        <h1 className="title">Fingertips{"\n"}Store</h1>
        <div className="container">
            {items.map((item, i) => 
                <Item key={i} item={item}></Item>
            )}
        </div>
    </div>
  );
}
