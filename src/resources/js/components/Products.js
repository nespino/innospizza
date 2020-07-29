import React, { Component } from 'react';
import Product from './Product'

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    addItem() {
        console.log('asdasd');
    }

    render() {
        let products = [{'id': 1, 'name': 'Margherita'}, {'id': 2, 'name': 'Napolitana'}, {'id': 3, 'name': 'Fugazzeta'}]
        return (
            <div>
                <div className="container mt-4">
                    {products.map(product => <Product key={product.id} name={product.name} addItem={this.addItem} />)}
                </div>
            </div>
        )
    }
};

export default Products