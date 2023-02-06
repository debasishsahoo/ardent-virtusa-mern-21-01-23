import React from 'react';


function Message(props) {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

function SwitchCase(props) {
    switch (props.role) {
        case 'Admin':
            return <Message text={props.role} />
        case 'User':
            return <Message text={props.role} />
        case 'Mod':
            return <Message text={props.role} />
        default:
            return 'Nothing Match'
    }

}

export default SwitchCase;