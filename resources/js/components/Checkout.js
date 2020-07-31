import React, { Component } from 'react';
import ReactModal from 'react-modal'
import OrderItem from './atoms/OrderItem'
import CurrencySwitch from './atoms/CurrencySwitch'

class Checkout extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showForm: false,
        };
        this.removeItems = this.removeItems.bind(this);
    }

    removeItems(which) {
        this.props.amountChange(which, -1);
    }

    render () {
        let products = this.props.products;
        products = products.filter(function(product) {
            return product.amount > 0;
        });
        let total = products.reduce((total, product) => total + product.amount * product.usd_price, 0);
        total = (this.props.currency=='USD' ? total : (total / this.props.euroToDolar)).toFixed(2);
        let button_mode = this.props.currency == 'USD' ? 'success' : 'info';
        let currency_img = `img/checkout_${this.props.currency}.png`;
        return (
            <div className="checkout-modal">
                <ReactModal isOpen={this.props.showCheckout}>
                    <img src="img/x.png" className="close-checkout" onClick={this.props.hideCheckout} />
                    <img src="img/logo-transp.png" className="checkout-logo" />
                    <div className="checkout-content currency-switch-container row">
                        <div className="col-12">
                            <h2>Your order</h2>
                            {products.map(product =>
                                <OrderItem
                                    key={product.id}
                                    data={product}
                                    removeItems={this.removeItems}
                                    currency={this.props.currency}
                                    euroToDolar={this.props.euroToDolar}
                                />)}
                            {total == 0 &&
                                <div className="col-12 col-md-12 empty-cart">You want more pizza... Please select at least one of them</div>
                            }
                        </div>
                        <div className="order-total row col-md-6 col-sm-10">Order total: { total } </div>
                        <div className="row col-md-2 col-sm-2 cart-button-container">
                            <CurrencySwitch
                                currency={this.props.currency}
                                onChange={this.props.currencyChange}
                                amountChange={this.props.amountChange}
                            />
                            <button className={`btn my-2 my-sm-0 btn-${button_mode}`}>
                                <img src={currency_img} className="checkout-btn"/>
                            </button>
                        </div>
                    </div>
                </ReactModal>

            </div>
        )
    }
}

export default Checkout;
