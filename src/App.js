import React from 'react'
// import { isEmpty } from 'lodash'
import { Switch, Route } from 'react-router-dom'

import MainPage from './components/pages/MainPage'
import FrontPage from './components/pages/FrontPage'

// import logo from './logo.svg';
// import './App.css';

function App(props) {
  return (
    <div className="App">
    	<Switch>
    		<Route exact path="/" component={FrontPage} />
    		<Route path="/main" component={MainPage} />
    	</Switch>
    </div>
  )
}

export default App
