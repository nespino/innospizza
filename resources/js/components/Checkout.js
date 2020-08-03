import React, { Component } from 'react';
import ReactModal from 'react-modal'
import ViewOrder from './ViewOrder'
import OrderForm from './OrderForm'

class Checkout extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showOrderList: true,
            showForm: false,
        };
        this.removeItems = this.removeItems.bind(this);
        this.enableForm = this.enableForm.bind(this);
        this.hideCheckout = this.hideCheckout.bind(this);
        ReactModal.setAppElement('body');
    }


    removeItems(which) {
        this.props.amountChange(which, -1);
    }

    enableForm() {
        this.setState({
            showForm: true,
            showOrderList: false,
        })
    }

    hideCheckout() {
        this.setState({
            showForm: false,
            showOrderList: true,
        });
        this.props.hideCheckout();
    }

    render () {
        let showCheckout = this.props.showCheckout;
        let subtotal = this.props.products.reduce((subtotal, product) => subtotal + (product.amount || 0) * product.usd_price, 0);
        subtotal = Number(this.props.currency=='USD' ? subtotal : (subtotal / this.props.euroToDollar)).toFixed(2);
        return (
            <div className="checkout-modal" >
                { showCheckout &&
                    <ReactModal isOpen={this.props.showCheckout}>
                        <img src="img/x.png" className="close-checkout" onClick={this.hideCheckout} />
                        <img src="img/logo-transp.png" className="checkout-logo"/>
                        { this.state.showOrderList &&
                            <ViewOrder products={this.props.products} currency={this.props.currency}
                                euroToDollar={this.props.euroToDollar} enableForm={this.enableForm}
                                currencyChange={this.props.currencyChange} hideCheckout={this.hideCheckout}
                                goShop={this.props.goShop} amountChange={this.props.amountChange}
                                subtotal={subtotal}/>
                        }
                        { this.state.showForm &&
                             <OrderForm currency={this.props.currency} subtotal={subtotal} />
                        }
                    </ReactModal>
                }
            </div>
        )
    }
}

export default Checkout;
