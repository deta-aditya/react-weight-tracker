import React from 'react'
import AnchoredIcon from '../../molecules/AnchoredIcon'
import './style.css'

function NavigationBar(props) {
	return (
		<nav className="NavigationBar">
			<h1 className="brand">
				Weight Tracker
			</h1>
			<div className="navigation-buttons">
				<button>Add Weight</button>
				<AnchoredIcon icon="sign-out-alt" size="lg" />
			</div>
		</nav>
	)
}

export default NavigationBar
