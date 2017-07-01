import React from 'react'
import trioLogo from '../assets/images/brand/trio-logo.svg'
import doctor from '../assets/images/characters/doctor.svg'

const Induction = () => {
  return (
    <div className="induction">
      <div className="wrap">
        <article>
          <h1>
            <img src={trioLogo} alt="Trio" width="167" />
          </h1>

          <h2>
            The easiest way to discover and share Duolingo Clubs
          </h2>

          <h3>
            We can only support English speakers right now, sorry!
          </h3>

          <button className="btn btn-success btn-dropdown choose-language">
            Choose a Language
          </button>
        </article>

        <div className="doctor">
          <img className="doctor" width="330" src={doctor} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Induction
