import React from 'react';
import PropTypes from 'prop-types';

function Title({ title }) {
    return (
        <React.Fragment>
            <div className="product-name">
                <h1>{title}</h1>
                <i className="fa fa-search"></i>
                <i className="fa fa-user"></i>
                <i className="fa fa-shopping-cart"></i>
            </div>
        </React.Fragment>
    );
}

Title.defaultProps = {
    title: 'Demo Headline'
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;