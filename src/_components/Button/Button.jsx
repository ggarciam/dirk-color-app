import React from "react";
import { Color } from '../Color';
import "./Button.css";

export const Button = (props) => {

   return (
       <button className="btn" onClick={() => props.handleChange(props.color)} >
           <Color color={props.color} />
       </button>
   );
};
