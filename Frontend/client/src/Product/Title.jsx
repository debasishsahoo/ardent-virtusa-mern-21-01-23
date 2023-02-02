import React from 'react';

function Title(props) {
    return (
        <React.Fragment>
            <div className="product-name">
                <h1>Airmax</h1>
                <i className="fa fa-search"></i>
                <i className="fa fa-user"></i>
                <i className="fa fa-shopping-cart"></i>
            </div>
        </React.Fragment>
    );
}

export default Title;