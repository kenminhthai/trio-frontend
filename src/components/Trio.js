import React from 'react'
import Induction from './induction'
import LanguageSelection from '../containers/language-selection'

const Trio = () => {
  return (
    <div className="trio">
      <Induction />
      <LanguageSelection />
    </div>
  )
}

export default Trio
