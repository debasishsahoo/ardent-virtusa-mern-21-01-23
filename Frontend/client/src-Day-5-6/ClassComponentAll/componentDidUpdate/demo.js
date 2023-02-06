import React from "react";

class Demo extends React.Component {
    constructor() {
        console.log('From Demo Constructor')
        super();
        this.state = { active: null, who: null };
    }

    componentDidUpdate() {
        console.log('From Demo componentDidUpdate')
        if (this.state.who == null) {
            this.setState({ who: 'Debasish' })
        }
    }


    render() {
        console.log('From Demo render')
        return (
            <div>
                <h1>From Demo {this.state.who} </h1>
                <button onClick={() => { this.setState({ active: 'yes' }) }}>Activated</button>
            </div>
        )
    }
}

export default Demo