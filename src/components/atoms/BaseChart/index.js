import React from 'react'
const { core } = require('zingchart-react')

const ZingChart = core

function BaseChart(props) {
	return (
		<ZingChart 
			id={props.id} 
			height={props.height}
			width={props.width}
			data={props.config} />
	)
}

export default BaseChart
