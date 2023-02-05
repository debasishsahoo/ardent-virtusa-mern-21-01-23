import React from "react";


class LYComponentDidMount extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            color: 'Red'
        }
    }
    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => { this.setState({ color: 'Yellow' }) }, 5000);
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1>Favorate Color is {this.state.color}</h1>
               
            </div>
        )
    }

}
export default LYComponentDidMount