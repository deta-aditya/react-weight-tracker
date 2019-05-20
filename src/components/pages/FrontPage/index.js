import React from 'react'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux' 
import { Redirect } from 'react-router-dom'
import RegistrationForm from '../../organisms/RegistrationForm'
import './style.css'

function FrontPage(props) {
	if (! isEmpty(props.entry)) {
		return <Redirect to="/main" />
	}

	return (
		<div className="FrontPage">
			<h1>Weight Tracker</h1>
			<RegistrationForm />
		</div>
	)
}

const mapStateToProps = state => ({
  entry: state.selectedEntry,
})

export default connect(mapStateToProps)(FrontPage)
