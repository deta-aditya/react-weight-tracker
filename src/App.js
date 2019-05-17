import React from 'react';
import { connect } from 'react-redux'; 
import { addEntry } from './actions/addEntry';

import logo from './logo.svg';
import './App.css';

function Entry(props) {
  const weights = props.weights.map(weight => {
    return <li>({weight.takenAt}) {weight.quantity}</li>
  })

  return (
    <div className="Entry">
      {props.name}
      <ul>{weights}</ul>
    </div>
  )
}

function App(props) {
  const entries = props.entries.map(entry => {
    return <Entry name={entry.name} weights={entry.weights} />
  })

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
        {entries}
        <button onClick={() => props.simpleAction()}>Test</button>
      </header>
    </div>
  )
}

const mapStateToProps = state => ({
  entries: state.entries,
  selectedEntry: state.selectedEntry,
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => {
    dispatch(addEntry({
      name: 'Deta',
      initialWeight: 59,
      takenAt: Date.now(),
    }))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
