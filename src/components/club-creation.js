import React from 'react'
import inLove from '../assets/images/characters/inlove.svg'
import ClubForm from './club-form'

const ClubCreation = ({ selectedLanguage, onFormCancelled }) => {
  return (
    <div className="club-creation">
      <div className="introduction">
        <img src={inLove} alt="In Love" height="72" />

        <h1>So you want to list your {selectedLanguage.name} club, huh?</h1>
        <h2>Awesome! Do that</h2>

        <span className="disclaimer">
          Please note, this will not create a club on Duolingo
        </span>
      </div>

      <div className="form">
        <ClubForm
          onCancelClicked={() => onFormCancelled()}
          selectedLanguage={selectedLanguage} />
      </div>
    </div>
  )
}

ClubCreation.defaultProps = {
  selectedLanguage: {},
  onFormCancelled: function() {}
}

export default ClubCreation
