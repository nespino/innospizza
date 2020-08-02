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
        return (
            <div className="checkout-modal">
                <ReactModal isOpen={this.props.showCheckout && this.state.showOrderList}>
                    <ViewOrder products={this.props.products} currency={this.props.currency}
                        euroToDollar={this.props.euroToDollar} hideCheckout={this.props.hideCheckout}
                        enableForm={this.enableForm}/>
                </ReactModal>
                <ReactModal isOpen={this.props.showCheckout && (this.state.showForm)}>
                    <OrderForm hideCheckout={this.props.hideCheckout} />
                </ReactModal>
        </div>
        )
    }
}

export default Checkout;
