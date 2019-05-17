import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { simpleAction } from './actions/simpleAction';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const simpleAction = (event) => {
      this.props.simpleAction()
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <pre>{JSON.stringify(this.props)}</pre>
          <button onClick={simpleAction}>Test Redux Action</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
