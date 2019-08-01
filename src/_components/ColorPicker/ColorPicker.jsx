import React from "react";
import { Title } from '../Title';
import { Palette } from '../Palette';
import "./ColorPicker.css";

export default class ColorPicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            label: 'Choose a color!',
            class: 'color-picker'
        }
    }

    render () {
        return (
            <div className={this.state.class}>
                <Title label={this.state.label} classBEM={this.state.class} />
                <Palette colors={this.props.colors}
                         handleChange={this.props.handleChange}
                         classBEM={this.state.class} />
            </div>
        );
    }
}
