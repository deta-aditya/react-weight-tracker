import React from 'react'
import './style.css'

function InputRadio(props) {
	return (
		<label className="InputRadio">
			<input 
				type="radio" 
				name={props.name}
				checked={props.model === props.value} 
				value={props.value} 
				onChange={event => props.onChange(event.target.value)}
				/>
			{props.label}
		</label>
	)
}

export default InputRadio
