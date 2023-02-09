import React, { useState } from 'react';

function Problam1(props) {
    const [click, setClick] = useState(0);

    return (
        <div>
            <p>you have Clicked {click} times</p>

            <p>and the Clicked is {click % 2 == 0 ? 'even' : 'odd'}</p>

            <button onClick={() => { setClick(click + 1) }}>Click Me</button>
        </div>
    );
}

export default Problam1;