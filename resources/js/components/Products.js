import React, { Component } from 'react';
import Product from './Product'

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let products = this.props.products;
        let firstProduct;
        if (products.length) {
            firstProduct = products[0].id;
        }

        return (
            <div className="col-12 product-container">
                {products.map(product =>
                    <Product
                        key={product.id}
                        data={product}
                        amountChange={this.props.amountChange}
                        currency={this.props.currency}
                        euroToDollar={this.props.euroToDollar}
                        firstProduct={firstProduct == product.id}
                    />)}
            </div>

        )
    }
};

export default Products