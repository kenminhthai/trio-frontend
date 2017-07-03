import React from 'react'
import ClubList from '../club-list'
import ClubCard from '../club-card'

import { mount, shallow } from 'enzyme'

const clubs = [
  {name: "Club Awesome", description: "Description 1"},
  {name: "Club Shit", description: "Description 2"}
]

describe('ClubList component', () => {
  it('mounts without crashing', () => {
    expect(mount(<ClubList />)).toBeTruthy();
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<ClubList />)
    expect(wrapper.hasClass('club-list')).toBe(true)
  })

  it('renders a loading message if clubs are fetching', () => {
    const wrapper = shallow(<ClubList clubs={{isFetching: true}} />)
    expect(wrapper.find(ClubCard).length).toBe(0)
    expect(wrapper.containsMatchingElement(<p>Loading ...</p>)).toBe(true)
  })

  it('renders a ClubCard for each club in props.club', () => {
    const wrapper = shallow(<ClubList clubs={clubs} />)

    expect(wrapper.find(ClubCard).first().props().club).toEqual(clubs[0])
    expect(wrapper.find(ClubCard).last().props().club).toEqual(clubs[1])
    expect(wrapper.find(ClubCard).length).toBe(2)
  })
})
