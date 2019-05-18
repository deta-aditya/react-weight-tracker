import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputText from '../../atoms/InputText'
import { addEntry, selectEntry } from '../../../actions'
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
			const foundEntry = this.props.entries.find(entry => {
				return entry.name === this.state.name
			}) 

			if (! foundEntry) {
				const newEntry = {
					name: this.state.name,
					initialWeight: this.state.initialWeight,
					takenAt: Date.now()
				}

				this.props.addEntry(newEntry).then(() => signUp())
			} else {
				this.props.selectEntry(foundEntry)
			}
		}

		return (
			<div className="RegistrationForm">
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
	addEntry: entry => dispatch(addEntry(entry)),
	selectEntry: entry => dispatch(selectEntry(entry)),
})

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(RegistrationForm)