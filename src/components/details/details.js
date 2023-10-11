import React from "react";

import './details.css';

export default function Details({item}) {
  return (
    <div className="details">
        <div className={`pic item${item.id}`}></div>
        <div>
        <h5>Description</h5>
        <p>{item.desc}</p>
        <h5>Key Features</h5>
        <div>
            <p>lines:</p>
            <p>{item.features.lines}</p>
        </div>
        <div>
            <p>display:</p>
            <p>{item.features.display}</p>
        </div>
        <div>
            <p>bluetooth:</p>
            <p>{item.features.bluetooth}</p>
        </div>
        <div>
            <p>connection:</p>
            <p>{item.features.connection}</p>
        </div>
        <div>
            <p>usb:</p>
            <p>{item.features.usb}</p>
        </div>
        <div>
            <p>poe:</p>
            <p>{item.features.poe}</p>
        </div>
        </div>
    </div>
  )
}