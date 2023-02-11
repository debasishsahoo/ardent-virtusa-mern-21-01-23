import React, { useState } from 'react';

function UseStateHooks2(props) {
    const [userInput, setUserInput] = useState()

    let UserInput = (event) => {
        let input = event.target.value
        console.log(input)
        setUserInput(input)
    }

    return (
        <div>
            <h2>UseStateHooks2</h2>
            <input placeholder='Enter Something.....' onChange={UserInput} />
            <div>
                <h2>{userInput}</h2>
            </div>
        </div>
    );
}

export default UseStateHooks2;