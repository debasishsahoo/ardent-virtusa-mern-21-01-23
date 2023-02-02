import React from 'react';

function Size(props) {
    const ListOfSize = props.sizes.map((size, index) => {
        return <li className="bg" key={index}>{size}</li>
    })

    return (
        <React.Fragment>
            <ul>
                <li>SIZE</li>
                {ListOfSize}
            </ul>
        </React.Fragment>
    );
}

export default Size;