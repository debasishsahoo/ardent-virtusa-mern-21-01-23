import React, { useState, useEffect } from 'react'

export default function Example1() {

    const [count, setCount] = useState(0);

    //! This code Run Every Render with component 
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1)
    //     }, 1000)
    // })

    //! This code ONES after First Render with component 
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    }, [])




    return (
        <React.Fragment>
            <div>The Counte is {count}</div>
        </React.Fragment>







    )
}
