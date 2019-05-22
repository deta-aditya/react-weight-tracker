import React from 'react'
import BaseIcon from '../../atoms/BaseIcon'

function AnchoredIcon(props) {
	const httpReference = props.href || ''
	const onClickHandler = props.onClick
		|| (e => e.preventDefault())

	return (
		<a href={httpReference} onClick={onClickHandler}>
			<BaseIcon 
				icon={props.icon} 
				size={props.size} />
		</a>
	)
}

export default AnchoredIcon
