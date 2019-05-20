import React from 'react'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NavigationBar from '../../organisms/NavigationBar'
import './style.css'

function MainPage(props) {
	if (isEmpty(props.entry)) {
		return <Redirect to="/" />
	}

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

export default connect(mapStateToProps)(MainPage)