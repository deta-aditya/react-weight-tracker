import React from 'react'
import { connect } from 'react-redux'
import { setHistoryFilter } from '../../../actions'
import HistoryItem from '../../molecules/HistoryItem'
import './style.css'

function HistoryBar(props) {
	const displayedWeights = props.weights.filter(weight => {
		return weight.quantity.toString().includes(props.filter)
			|| weight.takenAt.toLocaleDateString().includes(props.filter)
	})

	return (
		<aside className="HistoryBar">
			<h3 className="title">History</h3>
			<input 
				className="filter" 
				type="text" 
				placeholder="Filter..." 
				onChange={e => props.setFilter(e.target.value)} />
			<div className="history-list">
				{
					displayedWeights.map((weight, index) => {
						return (
							<HistoryItem 
								weight={weight} 
								key={index.toString()} />
						)
					})
				}
			</div>
		</aside>
	)
}

const mapStateToProps = state => ({
	filter: state.historyFilter,
})

const mapDispatchToProps = dispatch => ({
	setFilter: query => dispatch(setHistoryFilter(query)),
})

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(HistoryBar)
