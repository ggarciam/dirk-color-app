import React from "react";
import "./Color.css";

export const Color = (props) => {

   return (
       <span className="circle" style={{backgroundColor: props.color}} />
   );
};
