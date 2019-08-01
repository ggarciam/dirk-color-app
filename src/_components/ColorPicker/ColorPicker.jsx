import React from "react";
import { Title } from '../Title';
import { Palette } from '../Palette';
import "./ColorPicker.css";

export default class ColorPicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            label: 'Choose a color!'
        }
    }

    render () {
        return (
            <div className="color-picker">
                <Title label={this.state.label} />
                <Palette colors={this.props.colors}
                         handleChange={this.props.handleChange} />
            </div>
        );
    }
}
