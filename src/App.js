import React from "react";
import Dirk from "./_components/Dirk";
import ColorPicker from "./_components/ColorPicker";
import { actions } from "./_actions/actions"
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: '#ffffff',
            arrayColors: actions.generateRandomColors(25)
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(color) {
        this.setState({
            color: color
        });
    }

    componentWillMount() {
        this.setState({
            color: this.state.arrayColors[0]
        });
    }

    render () {
        return (
            <div className="app">
                <Dirk color={this.state.color} />
                <ColorPicker colors={this.state.arrayColors}
                             handleChange={this.handleChange} />
            </div>
        );
    }
}

export default App;
