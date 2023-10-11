import React from "react";
import Button from "../button/button";
import { addItem } from '../../features/cart/cartSlice';

import './item.css';
import Details from "../details/details";

export default function Item({item}) {
  const [popupActive, setPopupActive] = React.useState(false);

  const handleSetPopup = (isOpen) => {
    setPopupActive(isOpen);
  };

  return (
    <div className="item">
      <div className={`pic item${item.id}`}></div>
      <p className="name">{item.name}</p>
      <p className="price"><b>&#163;{item.price}</b></p>
      <Button btnText={"Add to Cart"} onClickFn={addItem(item)} />
      <div className="tooltip" onMouseEnter={()=>handleSetPopup(true)} onMouseLeave={()=>handleSetPopup(false)}>
        {popupActive ? <Details item={item}></Details> : null}
      </div>
    </div>
  );
}
