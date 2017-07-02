import React, { PureComponent } from 'react'

import { bindActionCreators } from 'redux'
import { selectLanguage } from '../actions/select-language'
import { connect } from 'react-redux'

export const ClubSelection = ({ clubs, selectLanguage }) => {
  return (
    <div className="club-selection">
      {
        clubs.isFetching
          ? <p>Loading Clubs ...</p>
          : (
            <p>List of clubs</p>
          )
      }
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
