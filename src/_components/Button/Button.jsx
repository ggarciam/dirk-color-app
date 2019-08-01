import React from "react";
import "./Color.css";

export default class Color extends React.Component {

   constructor(props) {
       super(props);
   }

   render () {
       return (
           <div className="circle" style={{backgroundColor: this.props.color}} />
       );
   }
}
