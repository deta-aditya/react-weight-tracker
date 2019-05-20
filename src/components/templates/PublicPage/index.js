import React from 'react'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux' 
import { Redirect } from 'react-router-dom'

const mapStateToProps = state => ({
  entry: state.selectedEntry,
})

function PublicPage(Component) {
	return connect(mapStateToProps)(props => {
		if (! isEmpty(props.entry)) {
			return <Redirect to="/main" />
		}

		return <Component />
	})
}

export default PublicPage
