import React, { Component } from "react";
import Switch from "react-switch";


export const euroIcon = (
    <img src='img/euro.png' />
);

export const usdIcon = (
    <img src='img/usd.png' />
);

class CurrencySwitch extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: true };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            checked: this.props.currency == 'USD'
        });
    }

    handleChange(checked) {
        this.setState({ checked });
        this.props.onChange(checked ? 'USD' : 'Euro')
    }

    render() {
        return (
            <div className="">
                <div className="currency-switch-container">
                    <Switch
                        onChange={this.handleChange}
                        checked={this.props.currency == 'USD'}
                        uncheckedIcon={euroIcon}
                        checkedIcon={usdIcon}
                        width={80}
                        offColor={"#26339f"}
            />
                </div>
            </div>
        );
    }
}

export default CurrencySwitch