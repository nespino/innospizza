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
            <div>
                <div className="container mt-4">
                    {products.map(product => <Product key={product.id} name={product.name} addItem={this.addItem} />)}
                </div>
            </div>
        )
    }
};

export default Products