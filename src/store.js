import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// For main page development purpose we add some initial states here
// Delete these after finished
const initialState = {
	entries: [
		{
			name: 'Kim Sejeong',
			weights: [
				{
					quantity: 43,
					takenAt: Date.now() + 1,
				},
				{
					quantity: 45,
					takenAt: Date.now(),
				},
			],
		}, 
	],
	selectedEntry: {
		name: 'Kim Sejeong',
		weights: [
			{
				quantity: 43,
				takenAt: Date.now() + 1,
			},
			{
				quantity: 45,
				takenAt: Date.now(),
			},
		],
	},
}

// This is modified too! Please refer to master branch to see
// the original function initialization
export default function configureStore() {
	return createStore(
		reducers,
		initialState,
		composeEnhancers(
			applyMiddleware(thunk)
		),
	)
}