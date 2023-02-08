import React from 'react';

class SetState extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: 'JAVASCRIPT'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                {/* <button onClick={this.setState({ msg: 'Typescript' })}>Change Msg</button> */}
            </div>
        )
    }

}

export default SetState;