import React from "react";
import { Button } from '../Button';
import "./Palette.css";

export const Palette = (props) => {

    var colors = [];
    for (let i = 0; i < props.colors.length; i++) {
        colors.push(
            <Button color={props.colors[i]} key={props.colors[i]} handleChange={props.handleChange}/>
        );
    }
    return (
        <div className="palette">
            {colors}
        </div>
    );
};
