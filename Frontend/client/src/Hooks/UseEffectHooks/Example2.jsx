import React, { useState, useEffect } from 'react'

export default function Example2() {

    const [count, setCount] = useState(0);

    const [calculation, setCalculation] = useState(0);

    //! This code Run Every Render with component 
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1)
    //     }, 1000)
    // })

    //! This code Run First Render with component 
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1)
    //     }, 1000)
    // }, [])


    //! this code Run based on button click
    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count])

    return (
        <React.Fragment>
            <div>The Counte is {count}</div>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation:{calculation}</p>
        </React.Fragment>







    )
}
