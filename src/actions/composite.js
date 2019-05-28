import { addEntry, selectEntry, pushToast } from './primary'

export const signUp = entry => (dispatch, getState) => {
	const foundEntry = getState().entries.find(entryRecord => {
		return entry.name === entryRecord.name
	}) 

	if (! foundEntry) {
		const newEntry = { ...entry }
		return dispatch(addEntry(newEntry))
			.then(() => dispatch(signUp(newEntry)))
	} else {
		dispatch(selectEntry(foundEntry))
		return Promise.resolve()
	}
}

export const pushToastMessage = message => dispatch => {
	dispatch(pushToast({
		id: Date.now() + Math.floor(Math.random() * 100),
		message,
		duration: 3000,
	}))

	return Promise.resolve()
}