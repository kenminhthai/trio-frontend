import React, { PureComponent } from 'react'
import ClubList from '../components/club-list'
import LanguageDropdown from '../components/language-dropdown'

import { bindActionCreators } from 'redux'
import { selectLanguage } from '../actions/select-language'
import { connect } from 'react-redux'

export const ClubSelection = ({ clubs, languages, selectLanguage, selectedLanguage }) => {
  return (
    <div className="club-selection">
      <header>
        <LanguageDropdown
          selectedLanguage={selectedLanguage}
          languages={languages} />
      </header>

      <ClubList clubs={clubs} />
    </div>
  )
}

ClubSelection.defaultProps = {
  languages: [],
  clubs: [],
  selectLanguage: function() {}
}

export const mapStateToProps = (state) => {
  return {
    languages: state.languages,
    clubs: state.clubs,
    selectedLanguage: state.selectedLanguage
  }
}

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectLanguage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubSelection)
