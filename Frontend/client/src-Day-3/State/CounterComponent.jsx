import React from 'react';
import './Counter.css'

class CounterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0
        }
    }

    increment = () => {
        this.setState(({ x: this.state.x + 1 }));
    }
    decrement = () => {
        this.setState(({ x: this.state.x - 1 }));
    }

    render() {
        return (<>
            <button className='button1' onClick={this.increment}> + </button>
            <h2>{this.state.x}</h2>
            <button className='button2' onClick={this.decrement} > - </button>

        </>)
    };
}

export default CounterComponent;