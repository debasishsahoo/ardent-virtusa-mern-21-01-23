import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = { favoritecolor: "red" };
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate:')
    return false;
  }
  changeColor = () => {
    console.log('changeColor:')
    this.setState({ favoritecolor: "blue" });
  }
  render() {
    console.log('render:')
    return (
      <>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
      </>

    );
  }
}

export default App;
