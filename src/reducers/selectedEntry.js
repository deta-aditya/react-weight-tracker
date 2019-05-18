export default (state = {}, { type, payload }) => {
	switch (type) {

		case 'SELECT_ENTRY':
			return payload.entry

		case 'UNSET_ENTRY':
			return {}

		case 'ADD_WEIGHT':
			return {
				...state,
				weights: [
					...state.weights,
					{
						quantity: payload.quantity,
						takenAt: payload.takenAt,
					},
				],
			}

		default:
			return state
			
	}
}