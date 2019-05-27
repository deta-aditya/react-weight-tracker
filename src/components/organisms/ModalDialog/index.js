import React from 'react'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { closeModal } from '../../../actions'
import { objectToClasses } from '../../../utilities'
import './style.css'

function ModalDialog(props) {
	const onModalClose = event => {
		event.preventDefault()
		props.close()
	}

	const classes = objectToClasses({
		'ModalDialog': true,
		'visible': ! isEmpty(props.modals),
	})

	return (
		<div className={classes}>
			<div className="dialog">
				<header className="dialog-header">
					<h3 className="title">{props.modals.title}</h3>
					<button className="close" onClick={onModalClose}>
						&times;
					</button>
				</header>
				<div className="dialog-content">
					{props.modals.content}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	modals: state.modals,
})

const mapDispatchToProps = dispatch => ({
	close: () => dispatch(closeModal())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ModalDialog)
