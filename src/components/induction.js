import React from 'react'
import trioLogo from '../assets/images/brand/trio-logo.svg'

const Induction = () => {
  return (
    <div className="induction">
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
    </div>
  )
}

export default Induction
