import React, { Component } from 'react';
import Buggy from './Components/Buggy';
import ErrorBoundary from './Components/ErrorBoundary';
import NotBuggy from './Components/NotBuggy';
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
export default class App extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error) {
    this.setState({
      error: true
    });
  }

  render() {
    return (
      <React.StrictMode>
        <div style={styles}>
          {this.state.error ? <div>Some error</div> : <Demo />}
          <h2>Error Boundaries Example</h2>
          <ErrorBoundary>
            <Buggy />
          </ErrorBoundary>
          <ErrorBoundary>
            <NotBuggy />
          </ErrorBoundary>
        </div>
      </React.StrictMode>
    );
  }
}

class Demo extends Component {
  render() {
    return <h1>{this.state.heading}</h1>;
  }
}
