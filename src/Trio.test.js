import React from 'react'
import ReactDOM from 'react-dom'
import Trio from './Trio'

import { mount } from 'enzyme'

describe('Trio component', () => {
  it('mounts without crashing', () => {
    expect(mount(<Trio />)).toBeTruthy()
  })
})
