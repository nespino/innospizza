import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceIn, flip } from 'react-animations';
import url from '../url/url';

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
    }

    addItem(data, e) {
        if (this.props.data.amount == 0) {
            this.setState({
                AnimatedAmountDiv: AnimatedAmountIn
            })
        }
        this.props.addItem(data, e);
        this.setState({
            showAmount: true,
            animationAmount: this.props.data.amount
        })
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

            this.props.removeItem(data, e);
        }
    }

    render() {
        let image_url = `${url}img/products/${this.props.data.image_url}`;
        return (
            <div className="card product-card text-center col-12 col-sm-12 col-md-6 col-xg-3 col-xl-2">
                <img className="card-img-top product-image" src={image_url} alt={this.props.data.name}/>
                <div className="card-body">
                    <div className="card-title product-price">
                        { this.props.currency=='USD' && '$' + this.props.data.usd_price }
                        { this.props.currency=='Euro' && '\u20AC' + (this.props.data.usd_price / this.props.euroToDollar).toFixed(2) }
                    </div>
                    <div className="card-text-container">
                        <div className="card-text product-description">
                            {this.props.data.description}
                        </div>
                    </div>
                    {this.state.showAmount &&
                            <this.state.AnimatedAmountDiv className="product-items-counter hvr-grow-shadow" onClick={(e) => this.removeItem(this.props.data, e)}
                                title="Click to remove from your order">{this.state.animationAmount}</this.state.AnimatedAmountDiv>
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