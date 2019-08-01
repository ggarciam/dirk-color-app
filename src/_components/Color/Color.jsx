import React from "react";
import "./Color.css";

export const Color = (props) => {

   return (
       <span className={props.classBEM + '__circle'} style={{backgroundColor: props.color}} />
   );
};
