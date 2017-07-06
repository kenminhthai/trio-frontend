import React from 'react'
import grumpy from '../assets/images/characters/grumpy.svg'

const NoClubsNotification = ({ selectedLanguage, onListYourClubClicked }) => {
  return (
    <div className="no-clubs-notification">
      <img src={grumpy} alt="Grumpy" height="72" width="auto" />

      <h2>
        It doesn't look like we have any {selectedLanguage.name} clubs right now
      </h2>

      <h3>
        Why don't you create one!
      </h3>

      <button className="btn btn-success" onClick={onListYourClubClicked}>
        List your club
      </button>
    </div>
  )
}

NoClubsNotification.defaultProps = {
  onListYourClubClicked: function() {},
  selectedLanguage: {}
}

export default NoClubsNotification
