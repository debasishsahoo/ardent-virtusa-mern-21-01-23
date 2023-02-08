import React from "react";
import ReactDOM from "react-dom";


class FindDOM extends React.Component {
    constructor() {
        super();
        this.DomFinderRed = this.DomFinderRed.bind(this);
    }

    DomFinderRed() {
        let n1 = document.getElementById('d1')
        ReactDOM.findDOMNode(n1).style.color = 'red'
    }
    DomFinderBlue() {
        let n2 = document.getElementById('d2')
        ReactDOM.findDOMNode(n2).style.color = 'blue'
    }




    render() {
        return (
            <div>
                <h1>Find DOM</h1>

                <button onClick={this.DomFinderRed}>Find DOM 1</button>
                <button onClick={this.DomFinderBlue}>Find DOM 2</button>

                <h3 id='d1'>NODE1</h3>
                <h3 id='d2'>NODE2</h3>


            </div>
        )
    }
}

export default FindDOM;