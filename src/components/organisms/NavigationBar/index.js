import React from 'react'
import Icon from '../../atoms/Icon'
import './style.css'

function NavigationBar(props) {
	return (
		<nav className="NavigationBar">
			<h1 className="brand">
				Weight Tracker
			</h1>
			<div className="navigation-buttons">
				<button>Add Weight</button>
				<a href="#">
					<Icon icon="sign-out-alt" size="lg" />
				</a>
			</div>
		</nav>
	)
}

export default NavigationBar
