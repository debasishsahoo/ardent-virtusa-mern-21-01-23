import React from 'react'
import ApiComponent from './Components/ApiCompnent'
import './App.css';

class App extends React.Component {
  constructor(props) {
    console.warn('constructor')
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentWillMount() {
    console.warn('componentWillMount')
    setTimeout(() => {
      this.setState({ favoritecolor: "Black" })
    }, 4000)
  }
  componentDidMount() {
    console.warn('componentDidMount')
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" })
    }, 9000)
  }
  render() {
    console.warn('Render')
    return (
      <>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <ApiComponent />
      </>

    );
  }
}

export default App;
