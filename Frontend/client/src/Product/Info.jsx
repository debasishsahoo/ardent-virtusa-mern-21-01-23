import React from 'react';

import Title from './Title'
import Details from './Details'
import Size from './Size'
import Color from './Color'
import Button from './Button'

function Info(props) {
    return (
        <React.Fragment>
            <div className="product-info">
                <Title />
                <Details />
                <Size />
                <Color />
                <Button />
            </div>
        </React.Fragment>
    );
}

export default Info;