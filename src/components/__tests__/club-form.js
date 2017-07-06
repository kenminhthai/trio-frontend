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
})
