import React from 'react';

function LogicalANDOpr(props) {

    const cars = props.car;
    return (
        <div>
            <h1>Grage</h1>

            {cars.length > 0 && <h2>I have {cars.length} cars in my Grage(AND)</h2>}

            {cars.length > 0 || <h2>I have {cars.length} cars in my Grage(OR)</h2>}


        </div>
    );
}

export default LogicalANDOpr;