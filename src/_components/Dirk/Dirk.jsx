import React from "react";
import { Title } from '../Title';
import { Color } from '../Color';
import "./Dirk.css";

export default class Dirk extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            label: 'Hi I\'m Dirk, today I am feeling '
        }
    }

    render () {
        return (
            <div className="dirk">
                <Title label={this.state.label + this.props.color} />
                <Color color={this.props.color} />
            </div>
        );
    }
}
