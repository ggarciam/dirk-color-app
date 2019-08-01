import React from "react";
import { Title } from '../Title';
import { Color } from '../Color';
import "./Dirk.css";

export default class Dirk extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            label: 'Hi I\'m Dirk, today I am feeling ',
            class: 'dirk'
        }
    }

    render () {
        return (
            <div className={this.state.class}>
                <Title label={this.state.label + this.props.color} classBEM={this.state.class} />
                <Color color={this.props.color} classBEM={this.state.class} />
            </div>
        );
    }
}
