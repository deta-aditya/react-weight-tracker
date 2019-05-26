import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { types } from '../../../reducers/chartSettings'
import { setChartType, closeModal } from '../../../actions'
import InputRadio from '../../molecules/InputRadio'
import StatefulForm from '../../templates/StatefulForm'
import './style.css'

function ConfigurationForm(props) {
	return (
		<div className="ConfigurationForm">
			<h4>History Chart</h4>
			<p>How would you like to display the chart?</p>
			<InputRadio
				label="Bar Chart" 
				name="HistoryChartType"
				model={props.state.chartType}
				value={types.BAR_CHART}
				onChange={props.handleInputChange('chartType')}
				/>
			<InputRadio
				label="Line Chart" 
				name="HistoryChartType"
				model={props.state.chartType}
				value={types.LINE_CHART}
				onChange={props.handleInputChange('chartType')}
				/>
			<div style={{ textAlign: 'right' }}>
				<button type="submit">Save</button>
			</div>
		</div>
	)
}

const initialState = props => ({
	chartType: props.chartType,
})

const onFormSubmit = (props, state) => {
	props.setChartType(state.chartType)
		.then(() => props.closeModal())
}

const mapStateToProps = state => ({
	chartType: state.chartSettings,
})

const mapDispacthToProps = dispatch => ({
	setChartType: type => dispatch(setChartType(type)),
	closeModal: () => dispatch(closeModal()),
})

export default compose(
	connect(mapStateToProps,mapDispacthToProps),
	StatefulForm(initialState, onFormSubmit)
)(ConfigurationForm)
