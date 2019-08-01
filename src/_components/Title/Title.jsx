import React from "react";
import "./Title.css";

export const Title = (props) => {

    return (
        <div className={props.classBEM + '__label'}>
            <h2>{props.label}</h2>
        </div>
    );
};
