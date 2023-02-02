import React from 'react';

function Button(props) {
    return (
        <React.Fragment>
            <span className="foot"><i className="fa fa-shopping-bag"></i>Buy Now</span>
            <span className="foot"><i className="fa fa-shopping-cart"></i>Add TO Cart</span>
        </React.Fragment>
    );
}

export default Button;