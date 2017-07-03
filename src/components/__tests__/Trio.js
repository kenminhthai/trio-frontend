import React from 'react'
import ReactDOM from 'react-dom'
import Trio from '../Trio'

import Induction from '../induction'
import LanguageSelection from '../../containers/language-selection'
import ClubSelection from '../../containers/club-selection'

import { mount, shallow } from 'enzyme'

describe('Trio component', () => {
  it('renders without crashing', () => {
    expect(shallow(<Trio />)).toBeTruthy()
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

  it('renders a ClubSelection component', () => {
    const wrapper = shallow(<Trio />)
    expect(wrapper.find(ClubSelection).length).toBe(1)
  })
})
