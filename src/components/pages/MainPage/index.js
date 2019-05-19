import React from 'react'
import { connect } from 'react-redux'
import { unsetEntry } from '../../../actions'
import NavigationBar from '../../organisms/NavigationBar'
import './style.css'

function MainPage(props) {
	return (
		<div className="MainPage">
			<NavigationBar />
			<h1>Weight Tracker</h1>
			<p>Hello {props.entry.name}! Current Weight: {props.entry.weights[0].quantity}</p>
			<button onClick={() => props.signOut()}>Exit</button>
		</div>
	)
}

const mapStateToProps = state => ({
	entry: state.selectedEntry
})

const mapDispatchToProps = dispatch => ({
	signOut: () => dispatch(unsetEntry())
})

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(MainPage)