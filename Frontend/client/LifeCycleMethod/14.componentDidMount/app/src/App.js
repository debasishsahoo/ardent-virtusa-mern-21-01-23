import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    console.log('constructor:')
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    console.log('componentDidMount:')
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" })
    }, 9000)
  }
  render() {
    console.log('render:')
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

export default App;
