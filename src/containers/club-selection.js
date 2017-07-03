import React, { PureComponent } from 'react'
import ClubList from '../components/club-list'

import { bindActionCreators } from 'redux'
import { selectLanguage } from '../actions/select-language'
import { connect } from 'react-redux'

export const ClubSelection = ({ clubs, selectLanguage }) => {
  return (
    <div className="club-selection">
      <ClubList clubs={clubs} />
    </div>
  )
}

ClubSelection.defaultProps = {
  clubs: [],
  selectLanguage: function() {}
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
