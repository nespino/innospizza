import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <div class="row col-md-3 col-sm-12 logo-container">
                <a href="/">
                    <img class="logo" src="img/logo-transp.png" alt="logo"/>
                </a>
            </div>
            <div class="row col-md-6 col-sm-12">
                <h1>Welcome to INNOS Pizza!</h1>
                <h3>All our pizzas are gluten and lactose free with rice flour dough</h3>
            </div>
            <div class="row col-md-3 col-sm-12 cart-button-container">
                <button className="btn btn-success my-2 my-sm-0" type="submit">
                    <img src="img/checkout.png" className="checkout-btn"/>
                </button>
            </div>
        </nav>
    );
};
export default Navbar;