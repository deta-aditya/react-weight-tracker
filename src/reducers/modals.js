export default (state = null, { type, payload }) => {
	switch (type) {

		case 'OPEN_MODAL':
			return payload.modal

		case 'CLOSE_MODAL':
			return null

		default:
			return state
			
	}
}