import React from 'react'
import attention from '../assets/images/characters/attention.svg'

import { bindActionCreators } from 'redux'
import { selectLanguage } from '../actions/select-language'
import { connect } from 'react-redux'

export const LanguageSelection = () => {
  return (
    <div className="language-selection">
      <img src={attention} alt="" width="78" height="72" />

      <h1>
        To get started, select a language.
        <span>Or, just browse all clubs</span>
      </h1>

      <p>Language list will go here</p>
    </div>
  )
}

LanguageSelection.defaultProps = {
  languages: []
}

export const mapStateToProps = (state) => {
  return {
    languages: state.languages
  }
}

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectLanguage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelection)
