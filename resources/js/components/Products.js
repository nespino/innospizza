import React, { Component } from 'react';
import Product from './Product'
import url from '../url/url'

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    async componentDidMount() {
        axios.get(`${url}api/products`).then(response=>{
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
                {products.map(product =>
                    <Product
                        key={product.id}
                        data={product}
                        addItem={this.addItem}
                        currency={this.props.currency}
                        euroToDolar={this.props.euroToDolar}
                    />)}
            </div>
        )
    }
};

export default Products