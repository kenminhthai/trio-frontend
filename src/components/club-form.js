import React from 'react'

const ClubForm = (props) => {
  return (
    <div className="club-form">
      <form>
        <div className="form-field">
          <label>Club code</label>
          <input type="text" name="club[code]" placeholder="XYDZ" required/>
        </div>

        <div className="form-field">
          <label>Name (optional)</label>
          <input type="text" name="club[name]" placeholder="Perth Deutsch" />
        </div>

        <div className="form-field">
          <label>Short description (optional)</label>
          <textarea name="club[description]" placeholder="We live in Perth and we love to practise German!">
          </textarea>
        </div>

        <div className="actions">
          <button className="btn btn-success btn-submit">
            List club now!
          </button>

          <a className="cancel">Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default ClubForm
