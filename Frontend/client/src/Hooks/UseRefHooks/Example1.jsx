import React, { useState, useRef, useEffect } from 'react'

export default function Example1() {
    const [Inputval, setInputVal] = useState('');
    const count = useRef(0)
    console.log(count)

    useEffect(() => {
        count.current = count.current + 1;
    })



    return (
        <div>
            <input value={Inputval} onChange={(e) => { setInputVal(e.target.value) }} />
            <h1>Render Count:{count.current}</h1>



        </div>
    )
}
