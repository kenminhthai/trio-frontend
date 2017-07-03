import React, { PureComponent } from 'react'
import classnames from 'classnames'

export class LanguageDropdown extends PureComponent {
  render() {
    return (
      <div className="language-dropdown">
        <div className="selected">
          {this.props.selectedLanguage.name}
        </div>

        <div className="dropdown">
          {
            this.props.languages.map((lang, index) => {
              const className = classnames({
                'language': true,
                'selected': this.props.selectedLanguage.name == lang.name
              })

              return <div key={index} className={className}>{lang.name}</div>
            })
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
