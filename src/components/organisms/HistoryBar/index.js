import React from 'react'
import HistoryItem from '../../molecules/HistoryItem'
import './style.css'

function HistoryBar(props) {
	return (
		<aside className="HistoryBar">
			<h3 className="title">History</h3>
			<div className="history-list">
				{
					props.weights.map((weight, index) => {
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

export default HistoryBar
