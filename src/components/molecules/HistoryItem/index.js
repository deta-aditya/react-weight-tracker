import React from 'react'
import './style.css'

function HistoryItem(props) {
	return (
		<div className="HistoryItem">
			<strong className="quantity">{props.weight.quantity}kg</strong>
			<span className="taken-at">
				{props.weight.takenAt.toLocaleDateString()}
			</span>
		</div>
	)
}

export default HistoryItem
