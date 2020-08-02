import React, { Component } from 'react';
import CurrencySwitch from './atoms/CurrencySwitch'

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let button_mode = this.props.currency == 'USD' ? 'success' : 'info';
        return (
            <nav className="navbar navbar-light currency-switch-container">
                <div className="row col-md-3 col-sm-12 logo-container">
                    <a href="/">
                        <img className="logo" src="img/logo-transp.png" alt="logo"/>
                    </a>
                </div>
                <div className="row col-md-6 col-sm-12">
                    <h3>All our pizzas are gluten and lactose free with rice flour dough</h3>
                </div>
                <div className="row col-md-3 col-sm-12 cart-button-container">
                    <CurrencySwitch
                        currency={this.props.currency}
                        onChange={this.props.currencyChange}
                    />
                    <button className={`btn my-2 my-sm-0 btn-${button_mode}`} onClick={this.props.showCheckout}>
                        <img src={"img/checkout.png"} className="checkout-btn"/>
                    </button>
                </div>
            </nav>
        );
    }
};
export default Navbar;