import React from "react";
import Demo from './demo'



class LyComponentDidUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'red' }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: 'blue' })
        }, 10000)
    }

    componentDidUpdate() {
        document.getElementById("mydiv").innerHTML = "The Update Color is" + this.state.color;
    }


    render() {
        return (
            <div>
                <h1>Favorate Color is {this.state.color}</h1>
                <div id="mydiv">

                </div>

                <Demo />
            </div>

        )

    }
}

export default LyComponentDidUpdate