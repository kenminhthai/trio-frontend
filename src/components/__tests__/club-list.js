import React from 'react'
import ClubList from '../club-list'
import ClubCard from '../club-card'
import ClubCreation from '../club-creation'
import NoClubsNotification from '../no-clubs-notification'

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

  it('sets default state.showClubCreation to false', () => {
    const wrapper = mount(<ClubList />)
    expect(wrapper.state().showClubCreation).toBe(false)
  })

  it('renders a ClubCreation component if state.showClubCreation is true', () => {
    const wrapper = shallow(<ClubList selectedLanguage="language" />)
    wrapper.setState({showClubCreation: true})

    expect(wrapper.find(ClubCreation).length).toBe(1)
    expect(wrapper.find(ClubCreation).props().selectedLanguage).toBe("language")
    expect(wrapper.children().length).toBe(1)
  })

  it('sets state.showClubCreation to false when ClubCreation is cancelled', () => {
    const wrapper = shallow(<ClubList />)
    wrapper.setState({showClubCreation: true})

    wrapper.find(ClubCreation).props().onFormCancelled()
    expect(wrapper.state().showClubCreation).toBe(false)
  })

  it('renders a loading message if clubs are fetching', () => {
    const wrapper = shallow(<ClubList clubs={{isFetching: true}} />)
    expect(wrapper.find(ClubCard).length).toBe(0)
    expect(wrapper.containsMatchingElement(<p>Loading ...</p>)).toBe(true)
  })

  it('renders a NoClubsNotification if no clubs exist', () => {
    const wrapper = shallow(<ClubList clubs={[]} selectedLanguage="language" />)
    expect(wrapper.find(ClubCard).length).toBe(0)
    expect(wrapper.find(NoClubsNotification).length).toBe(1)
    expect(wrapper.find(NoClubsNotification).props().selectedLanguage).toBe("language")
  })

  it('sets state.showClubCreation to true when "List your club" is clicked in NoClubsNotification', () => {
    const wrapper = shallow(<ClubList clubs={[]} selectedLanguage="language" />)
    wrapper.find(NoClubsNotification).props().onListYourClubClicked()
    expect(wrapper.state().showClubCreation).toBe(true)
  })

  it('renders a ClubCard for each club in props.club', () => {
    const wrapper = shallow(<ClubList clubs={clubs} />)

    expect(wrapper.find(ClubCard).first().props().club).toEqual(clubs[0])
    expect(wrapper.find(ClubCard).last().props().club).toEqual(clubs[1])
    expect(wrapper.find(ClubCard).length).toBe(2)
  })
})
