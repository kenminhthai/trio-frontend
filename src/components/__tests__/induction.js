import React from 'react'
import Induction from '../induction'

import { mount } from 'enzyme'

describe('Induction component', () => {
  it('mounts without crashing', () => {
    expect(mount(<Induction />)).toBeTruthy()
  })
})
