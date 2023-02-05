import React, { Component } from 'react';

class BascicLifeCycleComponent extends React.Component {
    constructor(props) {
        super(props);
        //Call First
        console.warn('constructor')
    }
    render() {
        //Call Second
        console.warn('render')
        return (

            <div>
                <h1>ReactJS component's Lifecycle</h1>
            </div>
        );
    }
    componentDidMount() {
        //Call Third
        console.log('Component Did MOUNT!')
    }
}

export default BascicLifeCycleComponent