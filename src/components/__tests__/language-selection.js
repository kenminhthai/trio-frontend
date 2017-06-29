import React from 'react'
import LanguageSelection from '../language-selection'
import attention from '../../assets/images/characters/attention.svg'

import { mount, shallow } from 'enzyme'

describe('LanguageSelection component', () => {
  it('mounts without crashing', () => {
    expect(mount(<LanguageSelection />)).toBeTruthy()
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<LanguageSelection />)
    expect(wrapper.hasClass('language-selection')).toBe(true)
  })

  it('renders the Attention character', () => {
    const wrapper = shallow(<LanguageSelection />)
    expect(wrapper.containsMatchingElement(
      <img src={attention} alt="" width="78" height="72" />
    ))
  })

  it('renders an instruction header', () => {
    const wrapper = shallow(<LanguageSelection />)
    expect(wrapper.find('h1').text()).toEqual('To get started, select a language.Or, just browse all clubs')
  })
})
