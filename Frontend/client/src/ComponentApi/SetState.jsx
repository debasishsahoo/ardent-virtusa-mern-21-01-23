import React from 'react';

class SetState extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: 'JAVASCRIPT',
            Color:'white'
        }
        this.jsSetState = this.jsSetState.bind(this)
        this.tsSetState = this.tsSetState.bind(this)
    }
    jsSetState() {
        this.setState({
            msg: 'Javascript',
            Color:'yellow'
        })
    }

    tsSetState() {
        this.setState({
            msg: 'Typescript',
            Color:'blue'
        })
    }

    render() {
        return (
            <div>
                <h1 style={{ backgroundColor: this.state.Color }}>{this.state.msg}</h1>
                {/* <button onClick={this.setState({ msg: 'typescript' })}>Change Msg</button> */}
                <button onClick={this.jsSetState}>JS</button>
                <button onClick={this.tsSetState}>TS</button>
            </div>
        )
    }
}

export default SetState;