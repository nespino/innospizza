import React, { Component } from 'react';
import ReactModal from 'react-modal'

class Checkout extends Component {
    constructor () {
        super();
        this.state = {
        };
    }

    render () {
        let price = this.props.currency=='USD' ? this.props.data.usd_price : (this.props.data.usd_price / this.props.euroToDolar).toFixed(2);
        return (
            <div>
                { true &&
                    <div className="row order-list">
                        <div className="col-3">
                            <img src={ 'img/' + this.props.data.image_url } />
                        </div>
                        <div className="col-7">
                            <div className="row"> <span className="product-name">{ this.props.data.name }</span> </div>
                            <div className="row"> <strong>{ this.props.data.description }</strong></div>
                        </div>
                        <div className="col-2">
                            <div className="row"> <img src="img/x.png" className="remove-items" onClick={(e) => this.props.removeItems(this.props.data, e)} /> </div>
                            <div className="row"> { this.props.data.price } </div>
                            <div className="row"> { this.props.data.amount } </div>
                            <div className="row"> { (this.props.data.amount * price).toFixed(2) } </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Checkout;
