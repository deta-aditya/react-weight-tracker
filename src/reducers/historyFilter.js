export default (state = '', { type, payload }) => {
	switch (type) {

		case 'SET_HISTORY_FILTER':
			return payload.query.toLowerCase()

		default:
			return state

	}
}