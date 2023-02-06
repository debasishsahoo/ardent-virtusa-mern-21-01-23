import React from "react";


class AdvanceLifeCycleComponent extends React.Component {
    //16.4 or earlyer 
    constructor(props) {
        super(props);
        this.state = {
            name: 'ABC'
        }
        console.log('constructor')
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>React Component LifeCycle</h1>
                <h3>Hello {this.state.name}</h3>
                <button onClick={this.changeState}>Click Here</button>
            </div>
        )
    }

    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('componentWDidMount')
    }
    changeState() {
        // this.setState({ name: 'Debasish' })
        console.log('Method Invoked')
    }
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }


}

export default AdvanceLifeCycleComponent