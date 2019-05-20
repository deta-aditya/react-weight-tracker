import React from 'react'
import PublicPage from '../../templates/PublicPage'
import RegistrationForm from '../../organisms/RegistrationForm'
import './style.css'

function FrontPage(props) {
	return (
		<div className="FrontPage">
			<h1>Weight Tracker</h1>
			<RegistrationForm />
		</div>
	)
}

export default PublicPage(FrontPage)
