export default (state = {}, { type, payload }) => {
	switch (type) {

		case 'OPEN_MODAL':
			return {
				title: payload.modal.title,
				content: payload.modal.content,
			}

		case 'CLOSE_MODAL':
			return {}

		default:
			return state
			
	}
}