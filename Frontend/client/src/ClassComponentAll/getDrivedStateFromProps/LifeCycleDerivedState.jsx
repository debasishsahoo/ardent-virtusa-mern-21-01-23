import React from "react";

class LifeCycleDerivedState extends React.Component {
    constructor(props) {
        super(props)
        this.state = { color: 'red' }
    }
    static getDerivedStateFromProps(props, state) {
        return { color: props.col }
    }

    render() {
        return (<h1>Favorate Color is {this.state.color}</h1>)
    }

}
export default LifeCycleDerivedState