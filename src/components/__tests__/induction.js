import React from 'react'
import Induction from '../induction'
import trioLogo from '../../assets/images/brand/trio-logo.svg'

import { mount, shallow } from 'enzyme'

describe('Induction component', () => {
  it('mounts without crashing', () => {
    expect(mount(<Induction />)).toBeTruthy()
  })

  it('renders the Trio logo', () => {
    const wrapper = shallow(<Induction />)
    expect(wrapper.containsMatchingElement(
      <img src={trioLogo} alt="Trio" width="167" />
    )).toBe(true)
  })

  it('renders the elevator pitch', () => {
    const wrapper = shallow(<Induction />)
    expect(wrapper.find('h2').text()).toEqual("The easiest way to discover and share Duolingo Clubs")
  })

  it('renders a notice about only supporting English speakers', () => {
    const wrapper = shallow(<Induction />)
    expect(wrapper.find('h3').text()).toEqual("We can only support English speakers right now, sorry!")
  })
})
