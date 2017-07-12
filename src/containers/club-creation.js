import React from 'react'
import inLove from '../assets/images/characters/inlove.svg'
import ClubForm from '../components/club-form'

import { bindActionCreators } from 'redux'
import { clubCreated } from '../actions/clubs'
import { connect } from 'react-redux'

export const ClubCreation = ({ selectedLanguage, onFormCancelled, clubCreated }) => {
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
          onClubCreated={(club) => clubCreated(club)}
          onCancelClicked={() => onFormCancelled()}
          selectedLanguage={selectedLanguage} />
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => {
  return {}
}

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ clubCreated }, dispatch)
}

ClubCreation.defaultProps = {
  selectedLanguage: {},
  clubCreated: function() {},
  onFormCancelled: function() {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubCreation)
