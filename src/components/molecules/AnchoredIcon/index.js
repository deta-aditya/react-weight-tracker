import React from 'react'
import Icon from '../../atoms/Icon'

function AnchoredIcon(props) {
	const httpReference = props.href || ''
	const onClickHandler = props.onClick
		|| (e => e.preventDefault())

	return (
		<a href={httpReference} onClick={onClickHandler}>
			<Icon 
				icon={props.icon} 
				size={props.size} />
		</a>
	)
}

export default AnchoredIcon
