import React from "react";

class ForceUpdate extends React.Component {
    constructor() {
        super();
        this.forceUpdateState = this.forceUpdateState.bind(this)
    }

    forceUpdateState() {
        this.forceUpdate()
    }

    render() {
        return(
            <div>
                <h1>Random Number:{Math.random()}</h1>
                
                <button onClick={this.forceUpdateState}>ForceUpdate</button>
            </div>
        )
    }

}

export default ForceUpdate