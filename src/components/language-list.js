import React from 'react'
import LanguageCard from './language-card'

const LanguageList = ({ languages, onLanguageSelected, selectedLanguage }) => {
  return (
    <div className="language-list">
      {
        languages.isFetching
          ? <p>Loading ...</p>
          : languages.map((lang, index) => {
              const selected = lang.name === selectedLanguage.name
              return <LanguageCard selected={selected} onSelected={(lang) => onLanguageSelected(lang)} key={index} language={lang} />
            })
      }
    </div>
  )
}

LanguageList.defaultProps = {
  selectedLanguage: {},
  onLanguageSelected: function() {}
}

export default LanguageList
