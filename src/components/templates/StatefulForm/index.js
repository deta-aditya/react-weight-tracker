import React from 'react'
import { convertToType } from '../../../utilities'

function StatefulForm(initialState, onSubmit) {
	return Component => class Anonymous extends React.Component {
		constructor(props) {
			super(props)
			this.state = initialState(props)
		}

		render() {
			const formOnSubmit = event => {
				event.preventDefault()
				onSubmit(this.props, this.state)
			}

			const handleInputChange = (name, type = String) => value => {
				this.setState({ 
					[name]: convertToType(value, type)
				})
			}

			return (
				<form onSubmit={event => formOnSubmit(event)}>
					<Component 
						handleInputChange={handleInputChange} 
						state={this.state} />
				</form>
			)
		}
	} 
}

export default StatefulForm
