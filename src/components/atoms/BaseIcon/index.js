import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BaseIcon(props) {
	return <FontAwesomeIcon 
		icon={props.icon}
		size={props.size} />
}

export default BaseIcon
