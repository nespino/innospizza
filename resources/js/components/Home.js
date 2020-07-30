import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Products from './Products'
import Checkout from './Checkout'

import url from '../url/url'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currency: 'USD',
            euroToDolar: 0,
            products: [],
            showCheckout: false,
        };
        this.currencyChange = this.currencyChange.bind(this);
        this.amountChange = this.amountChange.bind(this);
        this.showCheckout = this.showCheckout.bind(this);
        this.hideCheckout = this.hideCheckout.bind(this);
    }

    async componentDidMount() {
        let that = this;

        fetch("https://api.exchangeratesapi.io/latest?base=EUR&symbols=USD")
            .then(response => response.json())
        .then(response => {
            let euroToDolar = response.rates['USD'];
            that.setState({ euroToDolar: euroToDolar })
        }).catch(function(e){
            console.log(e);
            // Fallback to hardcoded
            // TODO: Save the value in db, periodically update it.
            that.setState({ euroToDolar: 1.1725 })
        });

        axios.get(`${url}api/products`).then(response=>{
            this.setState({ products: response.data })
        }).catch(error=>{
            alert("Error "+error)
        });
    }

    hideCheckout() {
        this.setState({
            showCheckout: false
        })
    }

    showCheckout(){
        this.setState({
            showCheckout: true
        })
    }

    currencyChange(currency) {
        this.setState({
            currency: currency
        })
    }

    amountChange(product, amount) {
        let products = this.state.products.map(function(p) {
            if (p==product) {
                p.amount = parseInt(p.amount || 0) + parseInt(amount);
            }
            return p;
        })
        this.setState({
            products: products
        })
    }

    render() {

        return (
            <div>
                <img src='img/background.png' alt="heart-pizza-bg" className="bg" />
                <Navbar
                    currency={this.state.currency}
                    currencyChange={this.currencyChange}
                    showCheckout={this.showCheckout}
                />
                <div className="position-ref container">
                    <div className="justify-content-center">
                        <Products
                            currency={this.state.currency}
                            euroToDolar={this.state.euroToDolar}
                            products={this.state.products}
                            amountChange={this.amountChange}
                        />
                    </div>
                </div>
                <Footer/>

                <Checkout
                    showCheckout={this.state.showCheckout}
                    hideCheckout={this.hideCheckout}
                    products={this.state.products}
                    currency={this.state.currency}
                    euroToDolar={this.state.euroToDolar}
                    amountChange={this.amountChange}
                />

            </div>
        );
    }
}

export default Home;

if (document.getElementById('main-content')) {
    ReactDOM.render(<Home />, document.getElementById('main-content'));
}
