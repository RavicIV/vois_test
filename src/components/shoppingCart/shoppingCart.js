import React from "react";
import Button from "../button/button";

import './shoppingCart.css';

export default function ShoppingCart({itemsInCart}) {
    let total = 0;

    return (
        <div className="shoppingCart">
            <h5><b>You have {itemsInCart.length} item{itemsInCart.length > 1 && 's'} in your shopping cart!</b></h5>
            <table>
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Units</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {itemsInCart.map((item, i) => {
                    total += item.price * item.units;

                    return <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.units}</td>
                        <td>&#163;{item.price * item.units}</td>
                    </tr>
                })}
                </tbody>
                <tfoot>
                    <tr>
                    <td colspan="2">Total Order Value</td>
                    <td>&#163;{total}</td>
                    </tr>
                </tfoot>
            </table>
            
            <Button btnText={"Checkout"} onClickFn={()=>{}} />
        </div>
    )
}