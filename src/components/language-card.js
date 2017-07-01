import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

const LanguageCard = ({ language, selected, onSelected }) => {
  const className = classnames({
    'language-card': true,
    'selected': selected,
    [language.language_code]: true
  })

  return (
    <div className={className}>
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
