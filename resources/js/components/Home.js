import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Products from './Products'
import Checkout from './Checkout'
import SmoothScrolling from "../utils/smoothScrolling";

import url from '../url/url'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currency: 'USD',
            euroToDollar: 0,
            products: [],
            showCheckout: false,
        };
        this.currencyChange = this.currencyChange.bind(this);
        this.amountChange = this.amountChange.bind(this);
        this.showCheckout = this.showCheckout.bind(this);
        this.hideCheckout = this.hideCheckout.bind(this);
        this.goShop = this.goShop.bind(this);
    }

    async componentDidMount() {
        let that = this;

        fetch("https://api.exchangeratesapi.io/latest?base=EUR&symbols=USD")
            .then(response => response.json())
        .then(response => {
            let euroToDollar = response.rates['USD'];
            that.setState({ euroToDollar: euroToDollar })
        }).catch(function(e){
            // Fallback to hardcoded
            // TODO: Save the value in db, periodically update it.
            that.setState({ euroToDollar: 1.1725 })
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
        });
    }

    goShop() {
        this.hideCheckout();
        SmoothScrolling.scrollTo("first-product");
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
            if (p.amount < 0) {
                p.amount = 0;
            }
            return p;
        })
        this.setState({
            products: products
        })
    }

    render() {
        let productsAmount = 0;
        if (this.state.products.length) {
            productsAmount = this.state.products.filter((product) => product.amount && product.amount > 0).length;
            console.log(productsAmount);
        }
        return (
            <div>
                <img src='img/background.png' alt="heart-pizza-bg" className="bg" />
                <Navbar
                    currency={this.state.currency}
                    currencyChange={this.currencyChange}
                    showCheckout={this.showCheckout}
                    productsAmount={productsAmount}
                />
                <div className="position-ref container">
                    <div className="justify-content-center">
                        <Products
                            currency={this.state.currency}
                            euroToDollar={this.state.euroToDollar}
                            products={this.state.products}
                            amountChange={this.amountChange}
                            ref='products'
                        />
                    </div>
                </div>
                <Footer/>

                <Checkout
                    showCheckout={this.state.showCheckout}
                    hideCheckout={this.hideCheckout}
                    products={this.state.products}
                    currency={this.state.currency}
                    euroToDollar={this.state.euroToDollar}
                    amountChange={this.amountChange}
                    currencyChange={this.currencyChange}
                    goShop={this.goShop}
                />

            </div>
        );
    }
}

export default Home;

if (document.getElementById('main-content')) {
    ReactDOM.render(<Home />, document.getElementById('main-content'));
}
