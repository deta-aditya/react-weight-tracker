import React, { Component } from 'react'
import InputText from '../../molecules/InputText'

class AddWeightForm extends Component {
	state = {
		quantity: '',
		takenAt: '',
	}

	render() {
		const setFormValue = (name, value) => {
			this.setState({ 
				[name]: value 
			})
		}

		const addWeight = () => {

		}

		return (
			<div className="AddWeightForm">
				<InputText 
					label="Quantity (kg)" 
					value={this.state.quantity} 
					onChange={value => setFormValue('quantity', Number(value))} />
				<InputText 
					label="Taken At" 
					value={this.state.takenAt} 
					onChange={value => setFormValue('takenAt', value)} />
				<div style={{ textAlign: 'right' }}>
					<button onClick={() => addWeight()}>Add Weight</button>
				</div>
			</div>
		)
	}
}

export default AddWeightForm
