import React, { useState } from 'react';

function Problam2(props) {

    const [click, setClick] = useState([]);

    const RandomNumberGen = () => {
        setClick([
            ...click, { id: click.length, value: Math.random() * 10 }
        ])
    }

    return (
        <div>
            <ul>
                {click.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
            <button onClick={RandomNumberGen}>Click Me</button>

        </div>
    );
}

export default Problam2;