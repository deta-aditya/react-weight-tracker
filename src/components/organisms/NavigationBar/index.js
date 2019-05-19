import React from 'react'
import { connect } from 'react-redux'
import { unsetEntry } from '../../../actions'
import AnchoredIcon from '../../molecules/AnchoredIcon'
import './style.css'

function NavigationBar(props) {
	const signOut = e => {
		e.preventDefault()
		props.signOut()
	}

	return (
		<nav className="NavigationBar">
			<div className="navigation-container">
				<h1 className="brand">
					Weight Tracker
				</h1>
				<div className="navigation-buttons">
					<button>Add Weight</button>
					<AnchoredIcon 
						icon="sign-out-alt" 
						size="lg" 
						onClick={signOut} />
				</div>
			</div>
		</nav>
	)
}

const mapDispatchToProps = dispatch => ({
	signOut: () => dispatch(unsetEntry())
})

export default connect(
	null, 
	mapDispatchToProps
)(NavigationBar)
