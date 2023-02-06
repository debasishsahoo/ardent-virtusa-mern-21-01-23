import React from "react";

class LyShouldComponentUpdate extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            color: 'Red'
        }
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return false;

    }
    changeColor() {
        console.log('changeColor');
        this.setState({ color: 'Yellow' })
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1>Favorate Color is {this.state.color}</h1>
                <button type='button' onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }

}

export default LyShouldComponentUpdate;