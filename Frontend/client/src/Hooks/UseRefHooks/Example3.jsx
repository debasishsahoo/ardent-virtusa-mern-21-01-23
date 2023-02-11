import React, { useEffect, useRef, useState } from 'react'

export default function Example3() {
    const [inputval, setinputval] = useState('A')

    const previousInputValue = useRef();

    useEffect(() => {
        console.log('Invoked')
        previousInputValue.current = inputval

        
    }, [inputval])


    return (
        <div>
            <input type='text'
                value={inputval}
                onChange={e => setinputval(e.target.value)}
            />
            <br />

            CurrentValue:{inputval}
            <br />
            previousValue:{previousInputValue.current}
        </div>
    )
}
