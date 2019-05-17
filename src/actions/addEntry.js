export const addEntry = (payload) => dispatch => {
	dispatch({
		type: 'ADD_ENTRY',
		payload,
	})
}