import React from 'react'
import './style.css'

function ToastItem(props) {
	setTimeout(() => props.popToast(props.toast.id), props.toast.duration)

	return (
		<div className="ToastItem">
			{props.toast.message}
		</div>
	)
}

export default ToastItem
