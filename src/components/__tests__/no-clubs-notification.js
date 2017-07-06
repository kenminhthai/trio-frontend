import React from 'react'
import NoClubsNotification from '../no-clubs-notification'
import grumpy from '../../assets/images/characters/grumpy.svg'

import td from 'testdouble'
import { mount, shallow } from 'enzyme'

describe('NoClubsNotification component', () => {
  it('mounts without crashing', () => {
    expect(mount(<NoClubsNotification />)).toBeTruthy()
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<NoClubsNotification />)
    expect(wrapper.hasClass('no-clubs-notification')).toBe(true)
  })

  it('renders the grumpy character', () => {
    const wrapper = shallow(<NoClubsNotification />)
    expect(wrapper.containsMatchingElement(
      <img src={grumpy} alt="Grumpy" height="72" width="auto" />
    )).toBe(true)
  })

  it('renders a header informing the user whats going on', () => {
    const language = {name: "German"}
    const wrapper = shallow(<NoClubsNotification selectedLanguage={language} />)
    expect(wrapper.find('h2').text()).toBe("It doesn't look like we have any German clubs right now")
  })

  it('renders a header to invite the user to create a club', () => {
    const wrapper = shallow(<NoClubsNotification />)
    expect(wrapper.find('h3').text()).toBe("Why don't you create one!")
  })

  it('renders a "List your club" button', () => {
    const wrapper = shallow(<NoClubsNotification />)
    expect(wrapper.containsMatchingElement(
      <button className="btn btn-success">
        List your club
      </button>
    )).toBe(true)
  })

  it('dispatches props.onListYourClubClicked when "List your club" is clicked', () => {
    const onListYourClubClicked = td.function()
    const wrapper = shallow(<NoClubsNotification onListYourClubClicked={onListYourClubClicked} />)

    wrapper.find('.btn').simulate('click')
    td.verify(onListYourClubClicked(), {times: 1})
  })
})
