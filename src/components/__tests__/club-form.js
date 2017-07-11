import React from 'react'
import ClubForm from '../club-form'

import nock from 'nock'
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
})
