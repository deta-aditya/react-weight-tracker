import React from 'react'
import { connect } from 'react-redux'
import { selectEntry } from '../../../actions'

function FrontPage(props) {
	return (
		<div className="FrontPage">
			<h1>Front Page</h1>
			<p>Create a new entry</p>	
		</div>
	)
}

const mapStateToProps = state => ({
	entries: state.entries,
})

const mapDispatchToProps = dispatch => ({
	selectEntry: () => dispatch(selectEntry()),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(FrontPage)