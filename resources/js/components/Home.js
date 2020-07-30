import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Products from './Products'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        };
    }


    render() {
        return (
            <div>
                <img src='img/background.png' alt="heart-pizza-bg" className="bg" />
                <Navbar/>
                <div className="position-ref container">
                    <div className="justify-content-center">
                        <Products/>
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
