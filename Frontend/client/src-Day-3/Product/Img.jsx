import React from 'react';

function Img(props) {
    return (
        <React.Fragment>
            <img src="https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1" alt="shoe" />
            <i className="fa fa-long-arrow-left"></i>
            <i className="fa fa-long-arrow-right"></i>
        </React.Fragment>
    );
}

export default Img;