import React, { PureComponent } from 'react'
import classnames from 'classnames'

export class LanguageDropdown extends PureComponent {
  renderLanguageList() {
    return this.props.languages.map((lang, index) => {
      const className = classnames({
        'language': true,
        'selected': this.props.selectedLanguage.name === lang.name
      })

      return <div key={index} className={className}>{lang.name}</div>
    })
  }

  render() {
    return (
      <div className="language-dropdown">
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
