import React, { useRef } from 'react'

export default function Example2() {
    const inputElemet = useRef()

    const inputElementFocuse = () => {
        console.log('Invoked methods')
        inputElemet.current.focus();
    }




    return (
        <React.Fragment>
            <input type='text' name='a' />
            <input type='text' name='b' />
            <input type='text' name='a' />
            <input type='text' ref={inputElemet} name='b' />
            <input type='text' name='a' />
            <input type='text' name='b' />
            <input type='text' name='a' />
            <input type='text' name='b' />

            <button onClick={inputElementFocuse}>Click Here</button>
        </React.Fragment>


    )
}

