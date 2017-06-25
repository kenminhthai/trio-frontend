import React from 'react'
import ReactDOM from 'react-dom'
import Trio from '../Trio'

import Induction from '../induction'

import { mount, shallow } from 'enzyme'

describe('Trio component', () => {
  it('mounts without crashing', () => {
    expect(mount(<Trio />)).toBeTruthy()
  })

  it('renders an Induction component', () => {
    const wrapper = shallow(<Trio />)
    expect(wrapper.find(Induction).length).toBe(1)
  })
})
