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
        axios.get('https://api.exchangeratesapi.io/latest').then(response=>{
            console.log(response);
            let euroToDolar = response.rates['usd'];
            console.log(euroToDolar);
            this.setState({ euroToDolar: euroToDolar })
        }).catch(error=>{
            // Fallback to hardcoded
            // TODO: Save the value in db, periodically update it.
            this.setState({ euroToDolar: 1.1725 })
        })
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
