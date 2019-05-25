import React, { Component } from 'react'
import { connect } from 'react-redux'
import { types } from '../../../reducers/chartSettings'
import { setChartType, closeModal } from '../../../actions'
import InputRadio from '../../molecules/InputRadio'
import './style.css'

class AddWeightForm extends Component {
	state = {
		chartType: this.props.chartType,
	}

	render() {
		const setFormValue = (name, value) => {
			this.setState({ 
				[name]: value 
			})
		}

		const saveConfiguration = () => {
			this.props.setChartType(this.state.chartType)
				.then(() => this.props.closeModal())
		}

		return (
			<div className="ConfigurationForm">
				<h4>History Chart</h4>
				<p>How would you like to display the chart?</p>
				<InputRadio
					label="Bar Chart" 
					name="HistoryChartType"
					model={this.state.chartType}
					value={types.BAR_CHART}
					onChange={value => setFormValue('chartType', value)}
					/>
				<InputRadio
					label="Line Chart" 
					name="HistoryChartType"
					model={this.state.chartType}
					value={types.LINE_CHART}
					onChange={value => setFormValue('chartType', value)}
					/>
				<div style={{ textAlign: 'right' }}>
					<button onClick={() => saveConfiguration()}>
						Save
					</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	chartType: state.chartSettings,
})

const mapDispacthToProps = dispatch => ({
	setChartType: type => dispatch(setChartType(type)),
	closeModal: () => dispatch(closeModal()),
})

export default connect(
	mapStateToProps,
	mapDispacthToProps,
)(AddWeightForm)
