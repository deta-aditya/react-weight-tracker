import React from 'react'
import Icon from '../../atoms/Icon'

function NavigationBar(props) {
	return (
		<nav className="NavigationBar">
			<div className="brand">
				<h1>Weight Tracker</h1>
			</div>
			<div className="navigation-buttons">
				<button>Add Weight</button>
				<a href="#">
					<Icon icon="sign-out-alt" />
				</a>
			</div>
		</nav>
	)
}

export default NavigationBar
