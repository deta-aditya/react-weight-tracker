import React from 'react'
import { connect } from 'react-redux'
import { types } from '../../../reducers/chartSettings'
import BaseChart from '../../atoms/BaseChart'
import './style.css'

// Utility function
function formatDateForDisplay(date) {
	const boxedDate = new Date(date)
	return `${boxedDate.getDate()}/${boxedDate.getMonth() + 1}/${boxedDate.getFullYear()}`
}

function HistoryChart(props) {
	const typeMap = {
		[types.LINE_CHART]: 'line',
		[types.BAR_CHART]: 'bar',
	}

	const config = {
		id: 'HistoryChart',
		width: '100%',
		height: '100%',
		config: {
			type: typeMap[props.chartType],
			'scale-x': {
				labels: props.weights.map(i => formatDateForDisplay(i.takenAt)),
			},
			series: [
				{ values: props.weights.map(i => i.quantity) },
			],
		},
	}

	return <BaseChart {...config} />
}

const mapStateToProps = state => ({
	weights: state.selectedEntry.weights,
	chartType: state.chartSettings,
})

export default connect(mapStateToProps)(HistoryChart)
