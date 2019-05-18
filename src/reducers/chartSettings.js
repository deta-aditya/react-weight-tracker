export const types = {
	LINE_CHART: 'LINE_CHART',
	BAR_CHART: 'BAR_CHART',
}

export default (state = types.LINE_CHART, { type, payload }) => {
	switch (type) {

		case 'SET_CHART_TYPE':
			return payload.type

		default:
			return state

	}
}