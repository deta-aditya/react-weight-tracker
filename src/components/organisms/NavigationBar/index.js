import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { openModal, unsetEntry } from '../../../actions'
import BaseIcon from '../../atoms/BaseIcon'
import AddWeightForm from '../AddWeightForm'
import './style.css'

function NavigationBar(props) {
	const signOut = () => {
		props.signOut().then(() => props.history.push('/'))
	}

	const openAddWeightModal = () => {
		props.openModal({
			title: 'Add Weight',
			content: <AddWeightForm />,
		})
	}

	return (
		<nav className="NavigationBar">
			<div className="navigation-container">
				<h1 className="brand">
					Weight Tracker
				</h1>
				<div className="navigation-buttons">
					<p className="identity">{props.entry.name}</p>
					<button onClick={openAddWeightModal}>
						Add Weight
					</button>
					<button onClick={signOut}>
						<BaseIcon icon="sign-out-alt" />
					</button>
				</div>
			</div>
		</nav>
	)
}

const mapDispatchToProps = dispatch => ({
	openModal: modal => dispatch(openModal(modal)),
	signOut: () => dispatch(unsetEntry()),
})

export default withRouter(connect(
	null, 
	mapDispatchToProps
)(NavigationBar))
