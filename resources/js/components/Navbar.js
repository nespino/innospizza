import React, { Component } from 'react';
import CurrencySwitch from './atoms/CurrencySwitch'
import styled, { keyframes } from 'styled-components';
import { bounceIn, flip } from 'react-animations';

const bounceInAnimation = keyframes`${bounceIn}`;
const flipAnimation = keyframes`${flip}`;

const AnimatedAmountIn = styled.div`animation: 1s ${bounceInAnimation};`
const AnimatedAmountOut = styled.div`animation: 0.5s ${flipAnimation};`


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AnimatedAmountDiv: AnimatedAmountIn,
        };
    }

    render() {
        let buttonMode = this.props.currency == 'USD' ? 'success' : 'info';
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
                    <button className={`btn my-2 my-sm-0 btn-${buttonMode}`} onClick={this.props.showCheckout}>
                        <img src={"img/checkout.png"} className="checkout-btn"/>
                        { this.props.productsAmount > 0 &&
                            <this.state.AnimatedAmountDiv className="cart-items-counter hvr-grow-shadow no-select">
                                {this.props.productsAmount}
                            </this.state.AnimatedAmountDiv>
                        }
                    </button>
                </div>
            </nav>
        );
    }
};
export default Navbar;