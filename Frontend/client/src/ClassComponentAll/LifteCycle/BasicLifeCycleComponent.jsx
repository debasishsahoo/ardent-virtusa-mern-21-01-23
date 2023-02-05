import React, { Component } from 'react'


class BasicLifeCycleCompnent extends React.Component {
    /* ! It is A old Component Style and Woking with OOPS Concept work upto 16.4 Vesion */
    constructor(props) {
        super(props);
        //Invoke First
        console.log('Constructor')
    }

    componentDidMount() {
        //Invoke Third
        console.log('ComponentDidMount')
    }

    render() {
        //Invoke Second
        console.log('Render')
        return (
            <h2>React js Component LifeStyle</h2>
        )
    }


}


export default BasicLifeCycleCompnent

