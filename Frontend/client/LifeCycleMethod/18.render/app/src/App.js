import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  }
  render() {
    return (
      <>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
      </>

    );
  }
}

export default App;
