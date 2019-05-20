import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import InputText from '../../molecules/InputText'
import { signUp } from '../../../actions'
import './style.css'

class RegistrationForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			initialWeight: 0,
		}
	}

	render() {
		const setFormValue = (name, value) => {
			this.setState({ 
				[name]: value 
			})
		}

		const signUp = () => {
			this.props.signUp({
				name: this.state.name,
				initialWeight: this.state.initialWeight,
				takenAt: Date.now()
			}).then(() => this.props.history.push('/main'))
		}

		return (
			<div className="RegistrationForm">
				<p className="form-title">Create a new entry</p>
				<InputText 
					label="Name" 
					value={this.state.name} 
					onChange={value => setFormValue('name', value)} />
				<InputText 
					label="Initial Weight" 
					value={this.state.initialWeight} 
					onChange={value => setFormValue('initialWeight', Number(value))} />
				<div style={{ textAlign: 'right' }}>
					<button onClick={() => signUp()}>Continue</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	entries: state.entries
})

const mapDispatchToProps = dispatch => ({
	signUp: entry => dispatch(signUp(entry))
})

export default withRouter(connect(
	mapStateToProps, 
	mapDispatchToProps
)(RegistrationForm))