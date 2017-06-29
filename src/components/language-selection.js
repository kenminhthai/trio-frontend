import React from 'react'
import attention from '../assets/images/characters/attention.svg'

const LanguageSelection = () => {
  return (
    <div className="language-selection">
      <img src={attention} alt="" width="78" height="72" />
      <h1>
        To get started, select a language.
        <span>Or, just browse all clubs</span>
      </h1>

      <p>Language list will go here</p>
    </div>
  )
}

export default LanguageSelection
