import React, { PureComponent } from 'react'
import ClubList from '../components/club-list'
import LanguageDropdown from '../components/language-dropdown'

import { bindActionCreators } from 'redux'
import { selectLanguage } from '../actions/select-language'
import { connect } from 'react-redux'

export class ClubSelection extends PureComponent {
  renderClubCount() {
    return (
      <div className="club-count">
        We currently have <strong>{this.props.clubs.length}</strong> {this.props.selectedLanguage.name} clubs
      </div>
    )
  }

  render() {
    return (
      <div className="club-selection">
        <header>
          <div className="wrap">
            <LanguageDropdown
              selectLanguage={this.props.selectLanguage}
              selectedLanguage={this.props.selectedLanguage}
              languages={this.props.languages} />

            {
              this.props.clubs.length > 0
                ? this.renderClubCount()
                : null
            }
          </div>
        </header>

        <ClubList
          selectedLanguage={this.props.selectedLanguage}
          clubs={this.props.clubs} />
      </div>
    )
  }
}

ClubSelection.defaultProps = {
  languages: [],
  clubs: [],
  selectedLanguage: {},
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
