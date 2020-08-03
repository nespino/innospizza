import React, { Component } from 'react';
import ReactModal from 'react-modal'
import styled, { keyframes } from 'styled-components';

import url from '../../url/url';

import popSound from '../../../sounds/pop.mp3';
import discardSound from '../../../sounds/discard.mp3';


class Checkout extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
        this.popSound = new Audio(popSound);
        this.discardSound = new Audio(discardSound);
    }

    addItem(data, e) {
        if (this.props.data.amount < 255) {
            this.props.amountChange(data, 1);
            this.popSound.play();
            this.popSound = new Audio(popSound);
        }
    }

    removeItem(data, e) {
        if (this.props.data.amount > 0) {
            this.props.amountChange(data, -1);
            this.discardSound.play();
            this.discardSound = new Audio(discardSound);
        }
    }

    render () {
        let price = this.props.currency=='USD' ? this.props.data.usd_price : (this.props.data.usd_price / this.props.euroToDollar).toFixed(2);
        let currencySimbol = this.props.currency=='USD' ? '$' : '\u20AC';
        let imageUrl = `${url}img/products/${this.props.data.image_url}`;

        return (
            <div>
                { true &&
                    <div className="row order-list-item">
                        <div className="col-sm-4 col-md-3 col-lg-2 col-xg-2 order-list-item-img">
                            <img src={ imageUrl } />
                        </div>
                        <div className="col-sm-8 col-md-5 col-lg-7 col-xg-8 text-left product-text">
                            <div className=""> <span className="product-name">{ this.props.data.name }</span> </div>
                            <div className="product-description"> <strong>{ this.props.data.description }</strong></div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 col-xg-2 item-subtotal">
                            <div className="col-8">
                                <span>Price: { [currencySimbol, Number(price).toFixed(2)].join('') } </span>
                                <span>Amount: { this.props.data.amount } </span>
                                <span>Subtotal: { [currencySimbol, Number(this.props.data.amount * price).toFixed(2)].join('') } </span>
                            </div>
                            <div className="change-product-amount-container col-4">
                                <div
                                    className="cart-add-item hvr-grow-shadow no-select"
                                    onClick={(e) => this.addItem(this.props.data, e)}
                                    title="Click to add one">+</div>
                                <div
                                    className="cart-remove-item hvr-grow-shadow no-select"
                                    onClick={(e) => this.removeItem(this.props.data, e)}
                                    title="Click to remove one">-</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Checkout;
