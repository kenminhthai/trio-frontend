import React from 'react'
import {
  ClubSelection,
  mapStateToProps,
  mapDispatchToProps
} from '../club-selection'

import ClubList from '../../components/club-list'
import LanguageDropdown from '../../components/language-dropdown'

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

  it('renders a LanguageSelector component, passing down languages', () => {
    const wrapper = shallow(<ClubSelection languages="languages" />)
    expect(wrapper.find(LanguageDropdown).length).toBe(1)
    expect(wrapper.containsMatchingElement(<LanguageDropdown languages="languages" />)).toBe(true)
  })

  it('renders a LanguageSelector component, passing down selectedLanguage', () => {
    const wrapper = shallow(<ClubSelection selectedLanguage="selected" />)
    expect(wrapper.find(LanguageDropdown).length).toBe(1)
    expect(wrapper.containsMatchingElement(<LanguageDropdown selectedLanguage="selected" />)).toBe(true)
  })

  it('renders a ClubList component, passing down props.clubs', () => {
    const wrapper = shallow(<ClubSelection clubs="clubs" />)
    expect(wrapper.find(ClubList).length).toBe(1)
    expect(wrapper.containsMatchingElement(<ClubList clubs="clubs" />)).toBe(true)
  })
})

describe('mapStateToProps', () => {
  it('maps state.clubs to props.clubs', () => {
    const state = {clubs: 'clubs'}
    const props = mapStateToProps(state)

    expect(props.clubs).toBe('clubs')
  })

  it('maps state.languages to props.languages', () => {
    const state = {languages: 'languages'}
    const props = mapStateToProps(state)

    expect(props.languages).toBe('languages')
  })

  it('maps state.selectedLanguage to props.selectedLanguage', () => {
    const state = {selectedLanguage: 'selectedLanguage'}
    const props = mapStateToProps(state)

    expect(props.selectedLanguage).toBe('selectedLanguage')
  })
})

describe('mapDispatchToProps', () => {
  const dispatch = jest.fn()
  const props = mapDispatchToProps(dispatch)

  expect(typeof props.selectLanguage).toBe('function')
})
