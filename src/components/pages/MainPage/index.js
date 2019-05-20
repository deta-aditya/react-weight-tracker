import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux' 
import ProtectedPage from '../../templates/ProtectedPage'
import NavigationBar from '../../organisms/NavigationBar'
import './style.css'

function MainPage(props) {
	return (
		<div className="MainPage">
			<NavigationBar />
			<h1>Weight Tracker</h1>
			<p>Hello {props.entry.name}! Current Weight: {props.entry.weights[0].quantity}</p>
		</div>
	)
}

const mapStateToProps = state => ({
	entry: state.selectedEntry
})

export default compose(
	ProtectedPage,
	connect(mapStateToProps),
)(MainPage)
