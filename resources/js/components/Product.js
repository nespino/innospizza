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
            <div className="card product-card text-center col-12 col-sm-12 col-md-6 col-xg-3 col-xl-2" title="Click to order!"
                    onClick={(e) => this.props.addItem(this.props.data, e)}>
                <img className="card-img-top product-image" src={image_url} alt={this.props.data.name}/>
                <div className="card-body">
                    <div className="card-title product-price">
                        { this.props.currency=='USD' && '$' + this.props.data.usd_price }
                        { this.props.currency=='Euro' && '\u20AC' + (this.props.data.usd_price / this.props.euroToDolar).toFixed(2) }
                    </div>
                    <div className="card-text product-description">
                        {this.props.data.description}
                    </div>
                    {this.props.data.amount > 0 &&
                        <span className="product-items-counter" onClick={(e) => this.props.removeItem(this.props.data, e)}
                            title="Click to remove from your order">{this.props.data.amount}</span>
                    }
                </div>
            </div>
        )
    }
};

export default Product