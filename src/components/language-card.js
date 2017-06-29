import React from 'react'
import PropTypes from 'prop-types'

const LanguageCard = ({ language }) => {
  return (
    <div className="language-card">
      <span className="name">{language.name}</span>
      <span className="learners">{language.number_of_learners_decorated}</span>
    </div>
  )
}

LanguageCard.propTypes = {
  language: PropTypes.object.isRequired
}

export default LanguageCard
