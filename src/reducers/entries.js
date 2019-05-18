export default (state = [], { type, payload }) => {
	switch (type) {
		
		case 'ADD_ENTRY':
			return [
				...state,
				{
					name: payload.name,
					weights: [
						{
							quantity: payload.initialWeight,
							takenAt: payload.takenAt,
						},
					],
				}, 
			]

		case 'UPDATE_ENTRY':
			return state.map(entry => {
				if (entry.name === payload.entry.name) {
					return payload.entry
				}

				return entry
			})

		default:
			return state
			
	}
}