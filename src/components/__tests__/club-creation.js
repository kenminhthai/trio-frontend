import React from 'react'
import ClubCreation from '../club-creation'
import ClubForm from '../club-form'
import inLove from '../../assets/images/characters/inlove.svg'

import { mount, shallow } from 'enzyme'

describe('ClubCreation', () => {
  it('mounts without crashing', () => {
    expect(mount(<ClubCreation />)).toBeTruthy()
  })

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
})
