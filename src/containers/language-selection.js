import React, { PureComponent } from 'react'
import LanguageList from '../components/language-list'
import attention from '../assets/images/characters/attention.svg'

import { bindActionCreators } from 'redux'
import { selectLanguage } from '../actions/select-language'
import { fetchLanguages } from '../actions/languages'
import { connect } from 'react-redux'

export class LanguageSelection extends PureComponent {
  componentDidMount() {
    this.props.fetchLanguages()
  }

  render() {
    return (
      <div className="language-selection">
        <img src={attention} alt="" width="78" height="72" />

        <h1>
          To get started, select a language.
          <span>Or, just browse all clubs</span>
        </h1>

        <LanguageList
          onLanguageSelected={(lang) => this.props.selectLanguage(lang)}
          selectedLanguage={this.props.selectedLanguage}
          languages={this.props.languages} />
      </div>
    )
  }
}

LanguageSelection.defaultProps = {
  languages: [],
  fetchLanguages: function() {}
}

export const mapStateToProps = (state) => {
  return {
    languages: state.languages,
    selectedLanguage: state.selectedLanguage
  }
}

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchLanguages, selectLanguage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelection)