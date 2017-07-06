import React from 'react'
import PropTypes from 'prop-types'
import inLove from '../assets/images/characters/inlove.svg'
import ClubForm from './club-form'

const ClubCreation = ({ selectedLanguage }) => {
  return (
    <div className="club-creation">
      <div className="introduction">
        <img src={inLove} alt="In Love" height="72" />

        <h1>List your {selectedLanguage.name} club</h1>
        <h2>Just fill out the fields to the right!</h2>

        <span className="disclaimer">
          Please note, this will <em>not</em> create a club on Duolingo
        </span>
      </div>

      <div className="form">
        <ClubForm selectedLanguage={selectedLanguage} />
      </div>
    </div>
  )
}

ClubCreation.defaultProps = {
  selectedLanguage: {}
}

export default ClubCreation
