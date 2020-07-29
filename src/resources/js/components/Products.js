import React, { Component } from 'react';
import Product from './Product'

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get('/api/products').then(response=>{
            this.setState({ products: response.data })
        }).catch(error=>{
            alert("Error "+error)
        })
    }

    addItem() {
    }

    render() {
        let products = this.state.products;

        return (
            <div className="col-12 product-container">
                {products.map(product => <Product key={product.id} data={product} addItem={this.addItem} />)}
            </div>
        )
    }
};

export default Products