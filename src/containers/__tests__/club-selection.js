import React from 'react'
import {
  ClubSelection,
  mapStateToProps,
  mapDispatchToProps
} from '../club-selection'

import td from 'testdouble'
import { mount, shallow } from 'enzyme'

describe('ClubSelection', () => {
  it('mounts without crashing', () => {
    expect(mount(<ClubSelection />)).toBeTruthy()
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<ClubSelection />)
    expect(wrapper.hasClass('club-selection')).toBe(true)
  })

  it('renders a loading message if clubs are fetching', () => {
    const wrapper = shallow(<ClubSelection clubs={{isFetching: true}} />)
    expect(wrapper.containsMatchingElement(<p>Loading Clubs ...</p>)).toBe(true)
    expect(wrapper.containsMatchingElement(<p>List of clubs</p>)).toBe(false)
  })
})

describe('mapStateToProps', () => {
  it('maps state.clubs to props.clubs', () => {
    const state = {clubs: 'clubs'}
    const props = mapStateToProps(state)

    expect(props.clubs).toBe('clubs')
  })
})

describe('mapDispatchToProps', () => {
  const dispatch = jest.fn()
  const props = mapDispatchToProps(dispatch)

  expect(typeof props.selectLanguage).toBe('function')
})
