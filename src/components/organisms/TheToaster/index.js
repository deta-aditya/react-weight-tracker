import React from 'react'
import { connect } from 'react-redux'
import { popToast } from '../../../actions'
import ToastItem from '../../molecules/ToastItem'
import './style.css'

function TheToaster(props) {
	const toasts = props.toasts.map(t => {
		return <ToastItem key={t.id} toast={t} popToast={props.popToast} />
	})

	return (
		<div className="TheToaster">
			{toasts}
		</div>
	)
}

const mapStateToProps = state => ({
	toasts: state.toasts
})

const mapDispatchToProps = dispatch => ({
	popToast: id => dispatch(popToast(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TheToaster)
