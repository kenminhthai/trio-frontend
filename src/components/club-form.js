import React from 'react'
import { Formik } from 'formik'
import Yup from 'yup'

import { post } from '../api'

const ClubForm = ({ values, touched, errors, handleChange, handleSubmit, isSubmitting }) => {
  return (
    <form className="club-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Club code</label>

        <input
          type="text"
          name="code"
          value={values.code}
          onChange={handleChange}
          placeholder="XYDZ"
          required />

          {errors.club && touched.club && <div>{errors.club}</div>}
      </div>

      <div className="form-field">
        <label>Name (optional)</label>

        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Perth Deutsch" />

          {errors.name && touched.name && <div>{errors.name}</div>}
      </div>

      <div className="form-field">
        <label>Short description (optional)</label>

        <textarea 
          name="description"
          onChange={handleChange}
          value={values.description}
          placeholder="We live in Perth and we love to practise German!">
        </textarea>

        {errors.description && touched.description && <div>{errors.description}</div>}
      </div>

      <div className="actions">
        <button className="btn btn-success btn-submit" type="submit" disabled={isSubmitting}>
          List club now!
        </button>

        <a className="cancel">Cancel</a>
      </div>
    </form>
  )
}

ClubForm.defaultProps = {
  errors: {},
  values: {}
}

export const FormikBag = {
  validationSchema: Yup.object().shape({
    code: Yup.string().required(),
    name: Yup.string(),
    description: Yup.string()
  }),

  // Clubs aren't currently editable, so there's no reason to pull
  // in any data from props
  mapPropsToValues: (props) => ({
    code: '',
    name: '',
    description: ''
  }),

  mapValuesToPayload: (values) => ({
    club: {
      code: values.code,
      name: values.name,
      description: values.description
    }
  }),

  handleSubmit: (payload, { props, setErrors, setSubmitting, resetForm }) => {
    return post(`/languages/${props.selectedLanguage.id}/clubs`, payload).then(
      (response) => {
        if(response.errors) {
          setErrors(response.errors)
        }
        else {
          resetForm()
        }

        setSubmitting(false)
      }
    )
  }
}

export default Formik(FormikBag)(ClubForm)
