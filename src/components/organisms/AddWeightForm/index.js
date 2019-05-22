import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addWeight, closeModal } from '../../../actions'
import InputText from '../../molecules/InputText'

class AddWeightForm extends Component {
	state = {
		quantity: 0,
		takenAt: '',
	}

	render() {
		const setFormValue = (name, value) => {
			this.setState({ 
				[name]: value 
			})
		}

		const addWeight = () => {
			this.props.addWeight({
				quantity: this.state.quantity,
				takenAt: this.state.takenAt,
			}).then(() => this.props.closeModal())
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

const mapDispacthToProps = dispatch => ({
	addWeight: weight => dispatch(addWeight(weight)),
	closeModal: () => dispatch(closeModal()),
})

export default connect(
	null,
	mapDispacthToProps,
)(AddWeightForm)
