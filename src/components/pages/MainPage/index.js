import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux' 
import HistoryBar from '../../organisms/HistoryBar'
import ProtectedPage from '../../templates/ProtectedPage'
import NavigationBar from '../../organisms/NavigationBar'
import './style.css'

function MainPage(props) {
	const latestWeight = [ ...props.entry.weights].sort((prev, next) => {
		return next.quantity - prev.quantity 
	})[0]

	const latestTakenAt = new Date(latestWeight.takenAt)

	return (
		<div className="MainPage">
			<NavigationBar />
			<div className="container">
				<HistoryBar />
				<main className="content">
					<h2 className="title">
						You weight {latestWeight.quantity}kg
						<small>Last recorded at {latestTakenAt.toLocaleString()}</small>
					</h2>
					<p className="subtitle">Here is how you are doing:</p>
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
