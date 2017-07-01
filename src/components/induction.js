import React from 'react'
import trioLogo from '../assets/images/brand/trio-logo.svg'
import duolingoEarth from '../assets/images/duolingo-earth.svg'

const Induction = () => {
  return (
    <div className="induction">
      <div className="earth">
        <img src={duolingoEarth} alt="" />
      </div>

      <article>
        <h1>
          <img src={trioLogo} alt="Trio" width="167" />
        </h1>

        <h2>
          The easiest way to discover Duolingo Clubs
        </h2>

        <h3>
          We can only support English speakers right now, sorry!
        </h3>

        <div className="btn choose-language">
          Choose a Language
        </div>
      </article>
    </div>
  )
}

export default Induction
