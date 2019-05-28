import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addWeight, pushToastMessage, updateEntry, closeModal } from '../../../actions'
import TextInput from '../../molecules/TextInput'
import DateInput from '../../molecules/DateInput'
import StatefulForm from '../../templates/StatefulForm'

function AddWeightForm(props) {
	return (
		<div className="AddWeightForm">
			<TextInput 
				label="Quantity (kg)" 
				value={props.state.quantity} 
				onChange={props.handleInputChange('quantity', Number)} />
			<DateInput 
				label="Taken At" 
				value={props.state.takenAt} 
				onChange={props.handleInputChange('takenAt', Date)} />
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
	}).then(() => props.updateEntry(props.selectedEntry))
		.then(() => props.pushToastMessage(`A new weight has been added`))
		.then(props.closeModal)
}

const mapStateToProps = state => ({
	selectedEntry: state.selectedEntry,
})

const mapDispatchToProps = dispatch => ({
	pushToastMessage: toast => dispatch(pushToastMessage(toast)),
	addWeight: weight => dispatch(addWeight(weight)),
	updateEntry: entry => dispatch(updateEntry(entry)),
	closeModal: () => dispatch(closeModal()),
})

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	StatefulForm(initialState, onFormSubmit)
)(AddWeightForm)
