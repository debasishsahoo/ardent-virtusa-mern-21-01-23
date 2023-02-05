import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleCount = this.handleCount.bind(this)
  };
  handleCount() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <button onClick=
          {this.handleCount}>Increase me!
        </button>
        <PropComponent data={this.state.count} />
      </div>
    );
  }
}
class PropComponent extends React.Component {

  componentWillReceiveProps(newProps) {
    console.log('Component is receiving new props', newProps);
  }
  render() {
    return (
      <div>
        <h1>My value is {this.props.data}</h1>
      </div>
    );
  }
}
export default App;
