import React from "react";
import { useDispatch } from 'react-redux' 

import './button.css';

export default function Button({btnText, onClickFn}) {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(onClickFn)}>{btnText}</button>
  )
}