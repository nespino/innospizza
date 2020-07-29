import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">InnosPizza</div>

                        <div className="card-body">Ready to order!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

if (document.getElementById('main-content')) {
    ReactDOM.render(<Home />, document.getElementById('main-content'));
}
