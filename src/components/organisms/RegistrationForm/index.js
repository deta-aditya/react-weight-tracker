import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { signUp, pushToastMessage } from '../../../actions'
import TextInput from '../../molecules/TextInput'
import StatefulForm from '../../templates/StatefulForm'
import './style.css'

function RegistrationForm(props) {
	return (
		<div className="RegistrationForm">
			<p className="form-title">Create a new entry</p>
			<TextInput 
				label="Name"
				value={props.state.name}
				onChange={props.handleInputChange('name')} />
			<TextInput 
				label="Initial Weight" 
				value={props.state.initialWeight}
				onChange={props.handleInputChange('initialWeight', Number)} />
			<div style={{ textAlign: 'right' }}>
				<button type="submit">Continue</button>
			</div>
		</div>
	)
}

const initialState = props => ({
	name: '',
	initialWeight: 0,
})

const onFormSubmit = (props, state) => {
	props.signUp({
		name: state.name,
		initialWeight: state.initialWeight,
		takenAt: new Date(),
	}).then(() => props.pushToastMessage(`You are signed in as ${state.name}`))
		.then(() => props.history.push('/main'))
}

const mapStateToProps = state => ({
	entries: state.entries,
})

const mapDispatchToProps = dispatch => ({
	pushToastMessage: toast => dispatch(pushToastMessage(toast)),
	signUp: entry => dispatch(signUp(entry)),
})

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps),
	StatefulForm(initialState, onFormSubmit)
)(RegistrationForm)
