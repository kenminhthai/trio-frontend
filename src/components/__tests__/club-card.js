import React from 'react'
import ClubCard from '../club-card'

import { mount, shallow } from 'enzyme'

const club = {
  name: "German Club",
  code: "XYDZL",
  description: "The description"
}

describe('ClubCard component', () => {
  it('mounts without crashing', () => {
    expect(mount(<ClubCard club={club} />)).toBeTruthy()
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<ClubCard club={club} />)
    expect(wrapper.hasClass('club-card')).toBe(true)
  })

  it('renders the club name', () => {
    const wrapper = shallow(<ClubCard club={club} />)
    expect(wrapper.find('h1').text()).toBe("German Club")
  })

  it('renders the club code', () => {
    const wrapper = shallow(<ClubCard club={club} />)
    expect(wrapper.find('h2').text()).toBe("Code: XYDZL")
  })

  it('renders the club description', () => {
    const wrapper = shallow(<ClubCard club={club} />)
    expect(wrapper.find('p.description').text()).toBe("The description")
  })
})
