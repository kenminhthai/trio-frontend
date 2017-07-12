import React from 'react'
import ClubForm, { FormikBag } from '../club-form'
import Yup from 'yup'

import nock from 'nock'
import td from 'testdouble'
import { mount, shallow } from 'enzyme'

const mockEndpoint = "https://api.duolingoclubs.com"

describe('ClubForm', () => {
  it('mounts without crashing', () => {
    expect(mount(<ClubForm />)).toBeTruthy()
  })

  it('renders an input for club Code utilising Formik', () => {
    const wrapper = shallow(<ClubForm />)
    wrapper.props().setValues({code: "club code"})

    const input = wrapper.dive().find('input[name="code"]')
    expect(input.props().onChange).toEqual(wrapper.props().handleChange)
    expect(input.props()).toMatchObject({
      type: "text",
      name: "code",
      value: "club code",
      placeholder: "XYDZ",
      required: true
    })
  })

  it('renders an input for the club Name', () => {
    const wrapper = shallow(<ClubForm />)
    wrapper.props().setValues({name: "club name"})

    const input = wrapper.dive().find('input[name="name"]')
    expect(input.props().onChange).toEqual(wrapper.props().handleChange)
    expect(input.props()).toMatchObject({
      type: "text",
      name: "name",
      value: "club name"
    })
  })

  it('renders an input for club Description utilising Formik', () => {
    const wrapper = shallow(<ClubForm />)
    wrapper.props().setValues({description: "club description"})

    const input = wrapper.dive().find('textarea')
    expect(input.props().onChange).toEqual(wrapper.props().handleChange)
    expect(input.props()).toMatchObject({
      name: "description",
      value: "club description",
      placeholder: "We live in Perth and we love to practise German!"
    })
  })

  it('renders a Cancel button that dispatches props.onCancelClicked when clicked', () => {
    const onCancelClicked = td.function()
    const wrapper = shallow(<ClubForm onCancelClicked={onCancelClicked} />)

    wrapper.dive().find('.actions .cancel').simulate('click')
    td.verify(onCancelClicked())
  })
})

describe('FormikBag', () => {
  it('sets up the expected validation schema', () => {
    expect(FormikBag.validationSchema.fields.code._type).toBe("string")
    expect(FormikBag.validationSchema.fields.name._type).toBe("string")
    expect(FormikBag.validationSchema.fields.description._type).toBe("string")
  })

  it('maps props to values all as empty strings', () => {
    expect(FormikBag.mapPropsToValues({})).toEqual({
      code: '', name: '', description: ''
    })
  })

  it('maps values to a club payload', () => {
    const values = {code: 'code', name: 'name', description: 'descr'}
    const payload = FormikBag.mapValuesToPayload(values)

    expect(payload).toEqual({
      club: {
        code: 'code',
        name: 'name',
        description: 'descr'
      }
    })
  })

  it('handles successful submission responses', () => {
    const setErrors = td.function()
    const setSubmitting = td.function()
    const resetForm = td.function()
    const onClubCreated = td.function()
    const payload = {club: {code: 'code', name: 'name', descr: 'descr'}}
    const props = {onClubCreated: onClubCreated, selectedLanguage: {id: 500}}

    nock(mockEndpoint)
      .post('/languages/500/clubs', payload)
      .reply(200, {data: "success data"})

    return FormikBag.handleSubmit(payload, { props, setErrors, setSubmitting, resetForm }).then(
      () => {
        td.verify(setSubmitting(false))
        td.verify(resetForm())
        td.verify(onClubCreated("success data"), {times: 1})
        td.verify(setErrors(), {times: 0})
        // TODO: When done, test that Redux was told about the new club, too
      }
    )
  })

  it('handles erroneous submission responses', () => {
    const setErrors = td.function()
    const setSubmitting = td.function()
    const resetForm = td.function()
    const payload = {club: {code: 'code', name: 'name', descr: 'descr'}}
    const props = {selectedLanguage: {id: 500}}

    nock(mockEndpoint)
      .post('/languages/500/clubs', payload)
      .reply(422, {errors: "error data"})

    return FormikBag.handleSubmit(payload, { props, setErrors, setSubmitting }).then(
      () => {
        td.verify(setSubmitting(false))
        td.verify(resetForm(), {times: 0})
        td.verify(setErrors("error data"))
      }
    )
  })
})
