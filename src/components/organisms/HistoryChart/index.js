import React from 'react'
import { connect } from 'react-redux'
import { types } from '../../../reducers/chartSettings'
import BaseChart from '../../atoms/BaseChart'
import './style.css'

function HistoryChart(props) {
	const typeMap = {
		[types.LINE_CHART]: 'line',
		[types.BAR_CHART]: 'bar',
	}

	const weights = [ ...props.weights]
		.sort((prev, next) => prev.takenAt - next.takenAt)
		
	const config = {
		id: 'HistoryChart',
		width: '100%',
		height: '100%',
		config: {
			type: typeMap[props.chartType],
			'scale-x': {
				labels: weights.map(i => i.takenAt.toLocaleDateString()),
			},
			series: [
				{ values: weights.map(i => i.quantity) },
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
