import React from 'react'
import ReactDOM from 'react-dom'
import Trio from '../Trio'

import Induction from '../induction'
import LanguageSelection from '../language-selection'

import { mount, shallow } from 'enzyme'

describe('Trio component', () => {
  it('mounts without crashing', () => {
    expect(mount(<Trio />)).toBeTruthy()
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<Trio />)
    expect(wrapper.hasClass('trio')).toBe(true)
  })

  it('renders an Induction component', () => {
    const wrapper = shallow(<Trio />)
    expect(wrapper.find(Induction).length).toBe(1)
  })

  it('renders a LanguageSelection component', () => {
    const wrapper = shallow(<Trio />)
    expect(wrapper.find(LanguageSelection).length).toBe(1)
  })
})
