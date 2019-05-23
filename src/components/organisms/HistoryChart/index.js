import React from 'react'
import { connect } from 'react-redux'
import BaseChart from '../../atoms/BaseChart'
import './style.css'

// Utility function
function formatDateForDisplay(date) {
	const boxedDate = new Date(date)
	return `${boxedDate.getDate()}/${boxedDate.getMonth() + 1}/${boxedDate.getFullYear()}`
}

function HistoryChart(props) {
	const config = {
		id: 'HistoryChart',
		width: '100%',
		height: '100%',
		config: {
			type: 'bar',
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
})

export default connect(mapStateToProps)(HistoryChart)
