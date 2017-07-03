import React from 'react'
import ClubCard from './club-card'

export const ClubList = ({ clubs }) => {
  return (
    <div className="club-list">
      {
        clubs.isFetching
          ? <p>Loading ...</p>
          : clubs.map((club, index) => <ClubCard key={index} club={club} />)
      }
    </div>
  )
}

ClubList.defaultProps = {
  clubs: []
}

export default ClubList
