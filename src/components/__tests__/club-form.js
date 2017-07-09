import React from 'react'
import ClubForm from '../club-form'

import { mount, shallow } from 'enzyme'

describe('ClubForm', () => {
  it('mounts without crashing', () => {
    expect(mount(<ClubForm />)).toBeTruthy()
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<ClubForm />)
    expect(wrapper.hasClass('club-form')).toBe(true)
  })

  it('renders a required field for Club code', () => {
    const wrapper = shallow(<ClubForm />)
    expect(wrapper.containsMatchingElement(
      <input
        type="text"
        name="club[code]"
        placeholder="XYDZ"
        required />
    )).toBe(true)
  })

  it('renders an optional field for Club name', () => {
    const wrapper = shallow(<ClubForm />)
    expect(wrapper.containsMatchingElement(
      <input
        type="text"
        name="club[name]"
        placeholder="Perth Deutsch" />
    )).toBe(true)
  })

  it('renders an optional field for Club description', () => {
    const wrapper = shallow(<ClubForm />)
    expect(wrapper.containsMatchingElement(
      <textarea
        name="club[description]"
        placeholder="We live in Perth and we love to practise German!">
      </textarea>
    )).toBe(true)
  })
})
