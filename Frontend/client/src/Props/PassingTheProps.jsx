import React from 'react';

function PassingTheProps({ Students }) {
    return (
        <div>
            <ul>
                {
                    Students.map((e, i) => {
                        return <li key={i}>Value:{e} || key:{i}</li>
                    })
                }
            </ul>

        </div>
    );
}

export default PassingTheProps;