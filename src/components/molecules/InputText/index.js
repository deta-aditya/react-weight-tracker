import React from 'react'
import './style.css'

function InputText(props) {
	return (
		<div className="InputText">
			<label>{props.label}</label>
			<input 
				type="text" 
				value={props.value}
				placeholder={props.placeholder} 
				onChange={event => props.onChange(event.target.value)}
			/>
		</div>
	)
}

export default InputText
