import React, { PureComponent } from 'react'
import classnames from 'classnames'

export class LanguageDropdown extends PureComponent {
  renderLanguageList() {
    return this.props.languages.map((lang, index) => {
      const className = classnames({
        'language': true,
        'selected': this.props.selectedLanguage.name === lang.name
      })

      return (
        <div key={index} className={className}>
          <span className={lang.language_code}>{lang.name}</span>
        </div>
      )
    })
  }

  render() {
    const className = classnames({
      'language-dropdown': true,
      [this.props.selectedLanguage.language_code]: true
    })

    return (
      <div className={className}>
        <div className="selected-language">
          {
            this.props.selectedLanguage.name !== undefined
              ? this.props.selectedLanguage.name
              : 'Select a language'
          }
        </div>

        <div className="dropdown">
          {
            this.props.languages.isFetching
              ? <p className="loading">Loading ...</p>
              : this.renderLanguageList()
          }
        </div>
      </div>
    )
  }
}

LanguageDropdown.defaultProps = {
  languages: [],
  selectedLanguage: {}
}

export default LanguageDropdown
