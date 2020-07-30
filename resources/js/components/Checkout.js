import React, { Component } from 'react';
import ReactModal from 'react-modal'
import OrderItem from './atoms/OrderItem'

class Checkout extends Component {
    constructor () {
        super();
        this.state = {
        };
    }

    removeItems(which) {
        this.props.amountChange(which, which.amount);
    }

    render () {
        let products = this.props.products;
        let total = products.reduce((total, product) => total + product.amount * product.usd_price, 0);
        total = (this.props.currency=='USD' ? total : (total / this.props.euroToDolar)).toFixed(2);
        return (
            <div>
                <ReactModal isOpen={this.props.showCheckout}>
                    <img src="img/x.png" className="close-checkout" onClick={this.props.hideCheckout} />
                    <div>
                        <table>
                            <tr>
                                <td colspan="3">Order</td>
                            </tr>
                            {products.map(product =>
                                <OrderItem
                                    key={product.id}
                                    data={product}
                                    removeItems={this.removeItems}
                                    currency={this.props.currency}
                                    euroToDolar={this.props.euroToDolar}
                                />)}
                            <tr></tr>
                            <tr>
                                <td colspan="3"></td>
                                <td>{ total }</td>
                            </tr>
                        </table>
                    </div>
                </ReactModal>
            </div>
        )
    }
}

export default Checkout;
