import React, { Component } from 'react';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <div className="mt-4">
                    <div className="row">
                        {this.props.name}
                    </div>
                </div>
            </div>
        )
    }
};

export default Product