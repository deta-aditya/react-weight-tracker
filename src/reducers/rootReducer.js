import { combineReducers } from 'redux'
import selectedEntry from './selectedEntry'
import entries from './entries'

export default combineReducers({
	entries, 
	selectedEntry,
})