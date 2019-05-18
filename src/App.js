import React from 'react'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux' 
import MainPage from './components/pages/MainPage'
import FrontPage from './components/pages/FrontPage'

// import logo from './logo.svg';
import './App.css';

function App(props) {
  const page = isEmpty(props.entry) ? <FrontPage /> : <MainPage />

  return (
    <div className="App">
      {page}
    </div>
  )
}

const mapStateToProps = state => ({
  entry: state.selectedEntry,
})

export default connect(
  mapStateToProps,
)(App);
