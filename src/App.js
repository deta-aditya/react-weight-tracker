import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './components/pages/MainPage'
import FrontPage from './components/pages/FrontPage'
import TheToaster from './components/organisms/TheToaster'
import ModalDialog from './components/organisms/ModalDialog'

function App(props) {
  return (
    <div className="App">
    	<ModalDialog />
    	<Switch>
    		<Route exact path="/" component={FrontPage} />
    		<Route path="/main" component={MainPage} />
    	</Switch>
    	<TheToaster />
    </div>
  )
}

export default App
