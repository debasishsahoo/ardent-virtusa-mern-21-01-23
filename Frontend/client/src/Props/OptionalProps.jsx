import React from 'react';

function OptionalProps({ person = "Default Person" }) {
    return (
        <div>
            <h1>Hello ,{person}</h1>
        </div>
    );
}

export default OptionalProps;