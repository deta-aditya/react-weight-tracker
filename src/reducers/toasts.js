export default (state = [], { type, payload }) => {
	switch (type) {

		case 'PUSH_TOAST':
			return [
				...state,
				{
					id: payload.id,
					message: payload.message,
					duration: payload.duration,
				},
			]

		case 'POP_TOAST':
			return state.filter(toast => toast.id !== payload.id)

		default:
			return state
			
	}
}