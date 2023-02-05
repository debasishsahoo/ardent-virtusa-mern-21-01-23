import React from 'react'
import './App.css';
import Demo from './Components/DidUpdate'

class App extends React.Component {
  constructor(props) {
    //console.log('constructor:')

    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    //console.log('componentDidMount:')
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" })
    }, 9000)
  }

  componentDidUpdate() {
    //console.log('componentDidUpdate:')
    document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    //console.log('render:')
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>

        <Demo />
      </div>
    );
  }
}

export default App;
