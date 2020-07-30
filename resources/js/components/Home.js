import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Products from './Products'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currency: 'USD',
            euroToDolar: 0,
            cartItems: []
        };
        this.currencyChange = this.currencyChange.bind(this);
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
    }

    currencyChange(currency) {
        this.setState({
            currency: currency
        })
    }

    render() {

        return (
            <div>
                <img src='img/background.png' alt="heart-pizza-bg" className="bg" />
                <Navbar
                    currency={this.state.currency}
                    currencyChange={this.currencyChange}
                />
                <div className="position-ref container">
                    <div className="justify-content-center">
                        <Products currency={this.state.currency} euroToDolar={this.state.euroToDolar} />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;

if (document.getElementById('main-content')) {
    ReactDOM.render(<Home />, document.getElementById('main-content'));
}
