import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Products from './Products'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartitems: []
        };
    }


    render() {
        return (
            <div>
                <Navbar/>
                <div className="position-ref height-expand container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h1>Welcome to InnosPizza!</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Products/>
                        </div>
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
