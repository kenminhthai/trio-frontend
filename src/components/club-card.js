import React from 'react'
import PropTypes from 'prop-types'

export const ClubCard = ({ club }) => {
  return (
    <div className="club-card">
      <article>
        <h1>{club.name}</h1>
        <h2>Code: {club.code}</h2>

        <p className="description">
          {club.description}
        </p>
      </article>
    </div>
  )
}

ClubCard.propTypes = {
  club: PropTypes.object.isRequired
}

export default ClubCard
