import React from 'react'
import './style.css'

function formatDate(date) {
	return date.toISOString().substring(0, 10)
}

function DateInput(props) {
	return (
		<div className="DateInput">
			<label>{props.label}</label>
			<input 
				type="date"
				value={formatDate(props.value)}
				placeholder={props.placeholder} 
				onChange={event => props.onChange(event.target.value)}
			/>
		</div>
	)
}

export default DateInput
