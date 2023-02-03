import React from 'react';
import PropTypes from 'prop-types';

function Details({ collection, headline, rackprice, mainprice }) {
    return (
        <React.Fragment>
            <div className="details">
                <h3>{collection}</h3>
                <h2>{headline}</h2>
                <h4><span className="fa fa-dollar"></span>{mainprice}</h4>
                <h4 className="dis"><span className="fa fa-dollar"></span>{rackprice}</h4>
            </div>
        </React.Fragment>
    );
}


Details.defaultProps = {
    collection: 'Demo Collection',
    headline: 'Demo Headline',
    rackprice: 0,
    mainprice: 0
}
Details.propTypes = {
    collection: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    rackprice: PropTypes.number.isRequired,
    mainprice: PropTypes.number.isRequired,
}

export default Details;