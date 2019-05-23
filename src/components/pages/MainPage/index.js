import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux' 
import HistoryBar from '../../organisms/HistoryBar'
import HistoryChart from '../../organisms/HistoryChart'
import ProtectedPage from '../../templates/ProtectedPage'
import NavigationBar from '../../organisms/NavigationBar'
import './style.css'

function MainPage(props) {
	const sortedWeights = [ ...props.entry.weights].sort((prev, next) => {
		return next.takenAt - prev.takenAt
	})
	const latestWeight = sortedWeights[0]
	const latestTakenAt = new Date(latestWeight.takenAt)

	return (
		<div className="MainPage">
			<NavigationBar entry={props.entry} />
			<div className="container">
				<HistoryBar weights={sortedWeights} />
				<main className="content">
					<h2 className="title">
						You weight {latestWeight.quantity}kg
						<small>Last recorded at {latestTakenAt.toLocaleString()}</small>
					</h2>
					<p className="subtitle">Here is how you are doing:</p>
					<HistoryChart />
				</main>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	entry: state.selectedEntry
})

export default compose(
	ProtectedPage,
	connect(mapStateToProps),
)(MainPage)
