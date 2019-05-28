import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addWeight, closeModal } from '../../../actions'
import InputText from '../../molecules/InputText'
import DateInput from '../../molecules/DateInput'
import StatefulForm from '../../templates/StatefulForm'

function AddWeightForm(props) {
	return (
		<div className="AddWeightForm">
			<InputText 
				label="Quantity (kg)" 
				value={props.state.quantity} 
				onChange={props.handleInputChange('quantity', Number)} />
			<DateInput 
				label="Taken At" 
				value={props.state.takenAt} 
				onChange={props.handleInputChange('takenAt', Date)}
				// onChange={(selectedDates, dateStr, instance) => console.log(selectedDates, dateStr, instance)} 
				/>
			<div style={{ textAlign: 'right' }}>
				<button type="submit">Add Weight</button>
			</div>
		</div>
	)
}

const initialState = props => ({
	quantity: 0,
	takenAt: new Date(),
})

const onFormSubmit = (props, state) => {
	props.addWeight({
		quantity: state.quantity,
		takenAt: state.takenAt,
	}).then(() => props.closeModal())
}

const mapDispacthToProps = dispatch => ({
	addWeight: weight => dispatch(addWeight(weight)),
	closeModal: () => dispatch(closeModal()),
})

export default compose(
	connect(null,	mapDispacthToProps),
	StatefulForm(initialState, onFormSubmit)
)(AddWeightForm)
