import React from 'react'
import LanguageCard from './language-card'

const LanguageList = ({ languages, onLanguageSelected }) => {
  return (
    <div className="language-list">
      {
        languages.isFetching
          ? <p>Loading ...</p>
          : languages.map((lang, index) => {
              return <LanguageCard onSelected={(lang) => onLanguageSelected(lang)} key={index} language={lang} />
            })
      }
    </div>
  )
}

LanguageList.defaultProps = {
  onLanguageSelected: function() {}
}

export default LanguageList
