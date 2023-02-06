import React from "react";

class LifeCycleConstructor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { color: 'red' }
        console.log('constructor Invoked')
    }
    render() {
        return (<h1>Favorate Color is {this.state.color}</h1>)
    }

}
export default LifeCycleConstructor