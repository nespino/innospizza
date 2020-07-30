import React, { Component } from "react";
import Switch from "react-switch";

class CurrencySwitch extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <span>USD</span>
                </div>
                <div className="col-4">
                    <Switch onChange={this.handleChange} checked={this.state.checked} />
                </div>
                <div className="col-2">
                    <span>Euro</span>
                </div>
            </div>
        );
    }
}

export default CurrencySwitch