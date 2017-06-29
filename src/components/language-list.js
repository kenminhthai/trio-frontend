import React from 'react'
import LanguageCard from './language-card'

const LanguageList = ({ languages }) => {
  return (
    <div className="language-list">
      {
        languages.isFetching
          ? <p>Loading ...</p>
          : languages.map((lang, index) => {
              return <LanguageCard key={index} language={lang} />
            })
      }
    </div>
  )
}

export default LanguageList
