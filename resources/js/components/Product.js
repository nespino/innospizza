import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceIn, flip } from 'react-animations';
import url from '../url/url';

import popSound from '../../sounds/pop.mp3';
import discardSound from '../../sounds/discard.mp3';

const bounceInAnimation = keyframes`${bounceIn}`;
const flipAnimation = keyframes`${flip}`;

const AnimatedAmountIn = styled.div`animation: 1s ${bounceInAnimation};`
const AnimatedAmountOut = styled.div`animation: 0.5s ${flipAnimation};`


class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAmount: false,
            animationAmount: 0,
            AnimatedAmountDiv: AnimatedAmountIn,
            lockAmountChange: false
        };
        this.popSound = new Audio(popSound);
        this.discardSound = new Audio(discardSound);
    }

    addItem(data, e) {
        if (!this.props.data.amount || this.props.data.amount < 255) {
            if (this.props.data.amount == 0) {
                this.setState({
                    AnimatedAmountDiv: AnimatedAmountIn
                })
            }
            this.props.amountChange(data, 1);
            this.setState({
                showAmount: true,
                animationAmount: this.props.data.amount,
            })
            let that = this;

            this.popSound.play();
            this.popSound = new Audio(popSound);
        }
    }

    removeItem(data, e) {
        if (!this.state.lockAmountChange) {
            this.setState({
                AnimatedAmountDiv: Object.assign({}, AnimatedAmountOut),
                lockAmountChange: true
            })

            let that = this;
            let showAmount = true;
            if (this.props.data.amount == 1) {
                showAmount = false;
            }
            setTimeout(function () {
                that.setState({
                    showAmount: showAmount,
                    animationAmount: that.props.data.amount,
                    lockAmountChange: false
                })
            }, 400);

            this.props.amountChange(data, -1);
            this.discardSound.play();
            this.discardSound = new Audio(discardSound);
        }
    }

    render() {
        let imageUrl = `${url}img/products/${this.props.data.image_url}`;
        return (
            <div className="card product-card text-center col-12 col-sm-12 col-md-6 col-xg-3 col-xl-2">
                <img className="card-img-top product-image" src={imageUrl} alt={this.props.data.name}/>
                <div className="card-body">
                    <div className="card-title product-price">
                        { this.props.currency=='USD' && '$' + Number(this.props.data.usd_price).toFixed(2) }
                        { this.props.currency=='Euro' && '\u20AC' + Number(this.props.data.usd_price / this.props.euroToDollar).toFixed(2) }
                    </div>
                    <div className="card-text-container">
                        <div className="card-text product-description">
                            {this.props.data.description}
                        </div>
                    </div>
                    {this.state.showAmount && (this.state.lockAmountChange || this.props.data.amount > 0) &&
                            <this.state.AnimatedAmountDiv className="product-items-counter hvr-grow-shadow" onClick={(e) => this.removeItem(this.props.data, e)}
                                title="Click to remove from your order">{this.state.lockAmountChange ? this.state.animationAmount : this.props.data.amount }</this.state.AnimatedAmountDiv>
                    }
                </div>
                <div className="card-bottom" onClick={(e) => this.addItem(this.props.data, e)} title="Click to order!">
                    <span>Add to cart</span>
                </div>
                { this.props.firstProduct &&
                    <div id="first-product"></div>
                }
            </div>
        )
    }
};

export default Product