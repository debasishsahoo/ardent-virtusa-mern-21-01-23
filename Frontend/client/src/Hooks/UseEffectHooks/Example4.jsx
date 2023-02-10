import React, { useState, useEffect } from 'react'

export default function Example1() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000);

        return () => clearTimeout(timer)
    }, [])



    return (
        <React.Fragment>
            <div>The Counte is {count}</div>
        </React.Fragment>







    )
}
