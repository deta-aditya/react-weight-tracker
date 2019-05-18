import { combineReducers } from 'redux'
import selectedEntry from './selectedEntry'
import historyFilter from './historyFilter'
import chartSettings from './chartSettings'
import entries from './entries'
import toasts from './toasts'
import modals from './modals'

export default combineReducers({
	selectedEntry,
	historyFilter,
	chartSettings,
	entries,
	toasts,
	modals,
})