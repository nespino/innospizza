import React, { Component } from 'react';
import ReactModal from 'react-modal'
import OrderItem from './atoms/OrderItem'
import CurrencySwitch from './atoms/CurrencySwitch'


class ViewOrder extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showOrderList: true,
            showForm: false,
        };
        this.removeItems = this.removeItems.bind(this);
        this.enableForm = this.enableForm.bind(this);
        ReactModal.setAppElement('body');
    }

    removeItems(which) {
        this.props.amountChange(which, -1);
    }

    enableForm()  {
        this.setState({
            showForm: true,
            showOrderList: false,
        })
    }

    render () {
        let buttonMode = this.props.currency == 'USD' ? 'success' : 'info';
        let products = this.props.products;
        products = products.filter(function(product) {
            return product.amount > 0;
        });
        let currencySymbol = this.props.currency == 'USD' ? '$' : '\u20AC';
        let total = products.reduce((total, product) => total + product.amount * product.usd_price, 0);
        total = Number(this.props.currency=='USD' ? total : (total / this.props.euroToDollar)).toFixed(2);
        return (
            <div className="checkout-content currency-switch-container row">
                <div className="col-12">
                    <h2>Your order</h2>
                    {products.map(product =>
                        <OrderItem
                        key={product.id}
                        data={product}
                        removeItems={this.removeItems}
                        currency={this.props.currency}
                        euroToDollar={this.props.euroToDollar}
                    />)}
                    {total == 0 &&
                        <div className="col-12 col-md-12 empty-cart" onClick={this.props.goShop}>
                            <div>You want more pizza...</div>
                            <div>Please select at least one of them</div>
                            <img src="img/logo-transp-no-products.png" className="no-products-logo" />
                        </div>
                    }
                </div>
                { total > 0 &&
                    <>
                        <div className="order-total row col-md-6 col-sm-8">Order total: { [currencySymbol, total].join('') } </div>
                        <div className="row col-md-2 col-sm-2 cart-button-container">
                            <CurrencySwitch
                                currency={this.props.currency}
                                onChange={this.props.currencyChange}
                                amountChange={this.props.amountChange}
                            />
                            <button className={`btn my-2 my-sm-0 btn-${buttonMode}`} onClick={this.props.enableForm}>
                                <img src={"img/checkout.png"} className="checkout-btn"/>
                            </button>
                        </div>
                    </>
                }
            </div>
        )
    }
}

export default ViewOrder;
