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

    hideCheckout() {
        this.setState({
            showForm: false,
            showOrderList: true,
        })
        this.props.hideCheckout;
    }

    render () {
        let showCheckout = this.props.showCheckout;
        let hideCheckout = this.hideCheckout;
        return (
            <div className="checkout-modal" >
                { showCheckout &&
                    <ReactModal isOpen={this.props.showCheckout}>
                        <img src="img/x.png" className="close-checkout" onClick={hideCheckout} />
                        <img src="img/logo-transp.png" className="checkout-logo" />
                        { this.state.showOrderList &&
                            <ViewOrder products={this.props.products} currency={this.props.currency}
                                euroToDollar={this.props.euroToDollar} enableForm={this.enableForm}/>
                        }
                        { this.state.showForm &&
                             <OrderForm />
                        }
                    </ReactModal>
                }
            </div>
        )
    }
}

export default Checkout;
