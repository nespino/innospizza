import React, { Component } from 'react';
import Product from './Product'

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(which) {
        this.props.amountChange(which, 1);
    }

    removeItem(which) {
        this.props.amountChange(which, -1);
    }

    render() {
        let products = this.props.products;

        return (
            <div className="col-12 product-container">
                {products.map(product =>
                    <Product
                        key={product.id}
                        data={product}
                        removeItem={this.removeItem}
                        currency={this.props.currency}
                        euroToDolar={this.props.euroToDolar}
                        addItem={this.addItem}
                    />)}
            </div>
        )
    }
};

export default Products