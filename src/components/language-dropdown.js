import React, { PureComponent } from 'react'
import classnames from 'classnames'

export class LanguageDropdown extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      showDropdown: false
    }
  }

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

  renderDropdown() {
    return (
      <div className="dropdown">
        {
          this.props.languages.isFetching
            ? <p className="loading">Loading ...</p>
            : this.renderLanguageList()
        }
      </div>
    )
  }

  render() {
    const className = classnames({
      'language-dropdown': true,
      [this.props.selectedLanguage.language_code]: true
    })

    return (
      <div className={className} onClick={() => this.setState({showDropdown: !this.state.showDropdown})}>
        <div className="selected-language">
          {
            this.props.selectedLanguage.name !== undefined
              ? this.props.selectedLanguage.name
              : 'Select a language'
          }
        </div>

        {this.state.showDropdown ? this.renderDropdown() : null}
      </div>
    )
  }
}

LanguageDropdown.defaultProps = {
  languages: [],
  selectedLanguage: {}
}

export default LanguageDropdown
