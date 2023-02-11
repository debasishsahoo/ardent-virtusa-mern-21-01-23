import React, { useState, useEffect } from 'react'

export default function Example3() {
    const [count1, setCount1] = useState(0);

    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log('You have Click on Button 1')
    }, [count1]);

    useEffect(() => {
        console.log('You have Click on Button 1')
    }, [count2]);





    return (
        <React.Fragment>
            <p>Count1:{count1}</p><button onClick={() => { setCount1(count1 + 1) }}> + </button>
            <p>Count2:{count2}</p><button onClick={() => { setCount2(count2 + 1) }}> - </button>

        </React.Fragment>
    )
}
