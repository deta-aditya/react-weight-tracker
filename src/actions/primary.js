export const setChartType = type => dispatch => {
	dispatch({ 
		type: 'SET_CHART_TYPE', 
		payload: { type },
	})
}

export const addEntry = payload => dispatch => {
	dispatch({
		type: 'ADD_ENTRY',
		payload,
	})
	return Promise.resolve()
}

export const updateEntry = entry => dispatch => {
	dispatch({
		type: 'UPDATE_ENTRY',
		payload: { entry },
	})
}

export const setHistoryFilter = query => dispatch => {
	dispatch({
		type: 'SET_HISTORY_FILTER',
		payload: { query },
	})
}

export const openModal = modal => dispatch => {
	dispatch({
		type: 'OPEN_MODAL',
		payload: { modal },
	})
}

export const closeModal = () => dispatch => {
	dispatch({ type: 'CLOSE_MODAL' })
}

export const selectEntry = entry => dispatch => {
	dispatch({
		type: 'SELECT_ENTRY',
		payload: { entry },
	})
}

export const unsetEntry = () => dispatch => {
	dispatch({ type: 'UNSET_ENTRY' })
	return Promise.resolve()
}

export const addWeight = payload => dispatch => {
	dispatch({
		type: 'ADD_WEIGHT',
		payload,
	})
	return Promise.resolve()
}

export const pushToast = payload => dispatch => {
	dispatch({
		type: 'PUSH_TOAST',
		payload,
	})
}

export const popToast = id => dispatch => {
	dispatch({
		type: 'POP_TOAST',
		payload: { id },
	})
}