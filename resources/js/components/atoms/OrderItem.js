import React, { Component } from 'react';
import ReactModal from 'react-modal'

import url from '../../url/url'

class Checkout extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
        this.amountChange = this.props.amountChange;
    }



    render () {
        let price = this.props.currency=='USD' ? this.props.data.usd_price : (this.props.data.usd_price / this.props.euroToDolar).toFixed(2);
        let image_url = `${url}img/products/${this.props.data.image_url}`;

        return (
            <div>
                { true &&
                    <div className="row order-list">
                        <div className="col-sm-4 col-md-2 col-lg-3 col-xg-2">
                            <img src={ image_url } />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-7 col-xg-8 text-left product-text">
                            <div className=""> <span className="product-name">{ this.props.data.name }</span> </div>
                            <div className=""> <strong>{ this.props.data.description }</strong></div>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2 col-xg-2 subtotal">
                            <div className="remove-items-container"> <img src="img/x.png" className="remove-items" onClick={(e) => this.props.removeItems(this.props.data, e)} /> </div>
                            <div className="">Price: { price } </div>
                            <div className="">Amount: { this.props.data.amount } </div>
                            <div className="">Subtotal: { (this.props.data.amount * price).toFixed(2) } </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Checkout;
