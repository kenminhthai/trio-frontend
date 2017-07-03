import React from 'react'
import Induction from './induction'
import LanguageSelection from '../containers/language-selection'
import ClubSelection from '../containers/club-selection'

const Trio = () => {
  return (
    <div className="trio">
      <Induction />
      <LanguageSelection />
      <ClubSelection />
    </div>
  )
}

export default Trio
