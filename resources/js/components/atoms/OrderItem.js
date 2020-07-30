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
            <tr>
                <td>{ this.props.data.name }</td>
                <td>{ this.props.data.amount }</td>
                <td>{ price }</td>
                <td>{ (this.props.data.amount * price).toFixed(2) } </td>
                <td><img src="img/x.png" className="remove-items" onClick={(e) => this.props.removeItems(this.props.data, e)} /></td>
            </tr>
        )
    }
}

export default Checkout;
