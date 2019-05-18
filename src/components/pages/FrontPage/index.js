import React from 'react'
import RegistrationForm from '../../organisms/RegistrationForm'

function FrontPage(props) {
	return (
		<div className="FrontPage">
			<h1>Weight Tracker</h1>
			<p>Create a new entry</p>	
			<RegistrationForm />
		</div>
	)
}
export default FrontPage