import React, { PureComponent } from 'react'

import { bindActionCreators } from 'redux'
import { selectLanguage } from '../actions/select-language'
import { connect } from 'react-redux'

export const ClubSelection = ({ languages, selectLanguage }) => {
  return (
    <div className="club-selection">
      <p>Hi, I'll show you a list of clubs and stuff</p>
    </div>
  )
}

ClubSelection.defaultProps = {
  clubs: [],
  selectLanguage: {}
}

export const mapStateToProps = (state) => {
  return {
    clubs: state.clubs
  }
}

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectLanguage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubSelection)
