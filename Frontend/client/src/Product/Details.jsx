import React from 'react';

function Details(props) {
    return (
        <React.Fragment>
            <div className="details">
                <h3>{props.collection}</h3>
                <h2>{props.headline}</h2>
                <h4><span className="fa fa-dollar"></span>{props.mainprice}</h4>
                <h4 className="dis"><span className="fa fa-dollar"></span>{props.rackprice}</h4>
            </div>
        </React.Fragment>
    );
}

export default Details;