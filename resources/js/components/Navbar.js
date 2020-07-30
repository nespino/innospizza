import React from 'react';
import CurrencySwitch from './atoms/CurrencySwitch'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <div className="row col-md-3 col-sm-12 logo-container">
                <a href="/">
                    <img className="logo" src="img/logo-transp.png" alt="logo"/>
                </a>
            </div>
            <div className="row col-md-6 col-sm-12">
                <h1>Welcome to INNOS Pizza!</h1>
                <h3>All our pizzas are gluten and lactose free with rice flour dough</h3>
            </div>
            <div className="row col-md-3 col-sm-12 cart-button-container">
                <CurrencySwitch />
                <button className="btn btn-success my-2 my-sm-0" type="submit">
                    <img src="img/checkout.png" className="checkout-btn"/>
                </button>
            </div>
        </nav>
    );
};
export default Navbar;