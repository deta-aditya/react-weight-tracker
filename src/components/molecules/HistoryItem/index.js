import React from 'react'
import './style.css'

function HistoryItem(props) {
	const takenAt = new Date(props.weight.takenAt)
	return (
		<div className="HistoryItem">
			<strong className="quantity">{props.weight.quantity}kg</strong>
			<span className="taken-at">
				{`${takenAt.getDate()}/${takenAt.getMonth() + 1}/${takenAt.getFullYear()}`}
			</span>
		</div>
	)
}

export default HistoryItem
