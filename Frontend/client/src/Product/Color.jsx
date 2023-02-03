import React from 'react';
import PropTypes from 'prop-types'

function Color({ colors }) {
    const ListOfColors = colors.map((color, index) => {
        return <li key={index} className={color}></li>
    });
    return (
        <React.Fragment>
            <ul>
                <li>COLOR</li>
                {ListOfColors}
            </ul>
        </React.Fragment>
    );
}

Color.defaultProps = {
    colors: ['color', 'color', 'color']
}

Color.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Color;