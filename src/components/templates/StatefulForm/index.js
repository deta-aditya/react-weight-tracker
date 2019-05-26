import React from 'react'

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

			const handleInputChange = name => value => {
				this.setState({ 
					[name]: value 
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
