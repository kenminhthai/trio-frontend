import React from 'react'
import PropTypes from 'prop-types'

const LanguageCard = ({ language, onSelected }) => {
  return (
    <div className="language-card">
      <article onClick={() => onSelected(language)}>
        <span className="name">{language.name}</span>
        <span className="learners">{language.number_of_learners_decorated}</span>
      </article>
    </div>
  )
}

LanguageCard.propTypes = {
  onSelected: function() {},
  language: PropTypes.object.isRequired
}

export default LanguageCard
