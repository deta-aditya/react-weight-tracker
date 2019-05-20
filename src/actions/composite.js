import { addEntry, selectEntry } from './primary'

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