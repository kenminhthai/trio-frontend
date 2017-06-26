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
    expect(wrapper.find('h2').text()).toEqual("The easiest way to discover Duolingo Clubs")
  })

  it('renders a "Post a Club" button', () => {
    const wrapper = shallow(<Induction />)
    expect(wrapper.find('.btn.btn-post-club').text()).toBe("Post a Club")
  })

  it('renders a "Discover Clubs" button', () => {
    const wrapper = shallow(<Induction />)
    expect(wrapper.find('.btn.discover-clubs').text()).toBe("Discover Clubs")
  })

  it('renders a "Choose a Language" button', () => {
    const wrapper = shallow(<Induction />)
    expect(wrapper.find('.btn.choose-language').text()).toBe("Choose a Language")
  })
})
