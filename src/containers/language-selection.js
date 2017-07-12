import React, { PureComponent } from 'react'
import LanguageList from '../components/language-list'
import attention from '../assets/images/characters/attention.svg'

import { bindActionCreators } from 'redux'
import { fetchLanguageClubs } from '../actions/clubs'
import { fetchLanguages } from '../actions/languages'
import { connect } from 'react-redux'

export class LanguageSelection extends PureComponent {
  componentDidMount() {
    this.props.fetchLanguages()
  }

  renderDoneButton() {
    return this.props.selectedLanguage.name !== undefined
      ? (
        <button className="btn btn-success btn-done" onClick={() => {}}>
          Done, show me {this.props.selectedLanguage.name} clubs
        </button>
      )
      : (
        <button className="btn btn-disabled btn-waiting" disabled>
          Select a language, first.
        </button>
      )
  }

  render() {
    return (
      <div className="language-selection">
        <img src={attention} alt="" width="78" height="72" />

        <h1>
          To get started, select a language.
        </h1>

        <LanguageList
          onLanguageSelected={(lang) => this.props.fetchLanguageClubs(lang)}
          selectedLanguage={this.props.selectedLanguage}
          languages={this.props.languages} />

        <div className="actions">
          {this.renderDoneButton()}
        </div>
      </div>
    )
  }
}

LanguageSelection.defaultProps = {
  languages: [],
  selectedLanguage: {},
  fetchLanguages: function() {},
  fetchLanguageClubs: function() {}
}

export const mapStateToProps = (state) => {
  return {
    languages: state.languages,
    selectedLanguage: state.selectedLanguage
  }
}

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchLanguages, fetchLanguageClubs }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelection)
