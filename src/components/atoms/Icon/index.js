import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon(props) {
	return <FontAwesomeIcon 
		icon={props.icon}
		size={props.size} />
}

export default Icon
