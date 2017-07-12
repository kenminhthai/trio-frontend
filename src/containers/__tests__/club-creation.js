import React from 'react'

import {
  ClubCreation,
  mapStateToProps,
  mapDispatchToProps
} from '../club-creation'

import ClubForm from '../../components/club-form'
import inLove from '../../assets/images/characters/inlove.svg'

import td from 'testdouble'
import { mount, shallow } from 'enzyme'

describe('ClubCreation', () => {
  it('renders with the correct className', () => {
    const wrapper = shallow(<ClubCreation />)
    expect(wrapper.hasClass('club-creation')).toBe(true)
  })

  it('renders an in love character', () => {
    const wrapper = shallow(<ClubCreation />)
    expect(wrapper.containsMatchingElement(
      <img src={inLove} alt="In Love" height="72" />
    )).toBe(true)
  })

  it('renders appropriate headers', () => {
    const wrapper = shallow(<ClubCreation selectedLanguage={{name: "German"}}/>)
    expect(wrapper.find('h1').text()).toBe("So you want to list your German club, huh?")
    expect(wrapper.find('h2').text()).toBe("Awesome! Do that")
  })

  it('renders a small disclaimer', () => {
    const wrapper = shallow(<ClubCreation />)
    expect(wrapper.find('span.disclaimer').text()).toBe("Please note, this will not create a club on Duolingo")
  })

  it('renders a ClubForm component', () => {
    const wrapper = shallow(<ClubCreation selectedLanguage="language" />)
    expect(wrapper.containsMatchingElement(
      <ClubForm selectedLanguage="language" />
    )).toBe(true)
  })

  it('dispatches props.onFormCancelled when ClubForm is cancelled', () => {
    const onFormCancelled = td.function()
    const wrapper = shallow(<ClubCreation onFormCancelled={onFormCancelled} />)

    wrapper.find(ClubForm).props().onCancelClicked()
    td.verify(onFormCancelled())
  })

  it('dispatches props.clubCreated when ClubForm reports it is so', () => {
    const clubCreated = td.function()
    const wrapper = shallow(<ClubCreation clubCreated={clubCreated} />)

    wrapper.find(ClubForm).props().onClubCreated("new club")
    td.verify(clubCreated("new club"), {times: 1})
  })
})

describe('mapStateToProps', () => {
  it('does not map any state', () => {
    expect(mapStateToProps({})).toEqual({})
  })
})

describe('mapDispatchToProps', () => {
  it('maps clubCreated to props', () => {
    const dispatch = jest.fn()
    const props = mapDispatchToProps(dispatch)

    expect(typeof props.clubCreated).toBe('function')
  })
})
