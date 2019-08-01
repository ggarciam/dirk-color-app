import React from "react";
import { Color } from '../Color';
import "./Button.css";

export const Button = (props) => {

   return (
       <button className={props.classBEM + '__btn'} onClick={() => props.handleChange(props.color)} >
           <Color color={props.color} classBEM={props.classBEM + '__btn'} />
       </button>
   );
};
