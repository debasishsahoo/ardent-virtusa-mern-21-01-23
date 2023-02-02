import React from 'react';

function Color(props) {
    const ListOfColors = props.colors.map((color, index) => {
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

export default Color;