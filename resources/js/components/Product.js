import React, { Component } from 'react';
import url from '../url/url'

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let image_url = `${url}img/${this.props.data.image_url}`;

        return (
            <div className="card product-card text-center col-12 col-sm-12 col-md-6 col-xg-3 col-xl-2">
                <img className="card-img-top product-image" src={image_url} alt={this.props.data.name}/>
                <div className="card-body">
                    <div className="card-title product-price">
                        {this.props.data.usd_price}
                    </div>
                    <div className="card-text product-description">
                        {this.props.data.description}
                    </div>
                </div>
            </div>
        )
    }
};

export default Product