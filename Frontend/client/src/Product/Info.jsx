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
                <Title title='AirMax by dev' />
                <Details
                    collection='Summer Colloection'
                    headline='Men Black & Blue Sneakers'
                    rackprice={2500}
                    mainprice={1750}
                />
                <Size sizes={[7, 8, 9, 10, 11, 12]} />
                <Color colors={['yellow', 'black', 'blue', 'red']} />
                <Button />
            </div>
        </React.Fragment>
    );
}

export default Info;