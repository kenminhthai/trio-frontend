import React from 'react'
import LanguageDropdown from '../language-dropdown'

import { mount, shallow } from 'enzyme'

const languages = [
  {name: "German"},
  {name: "Italian"}
]

describe('LanguageDropdown', () => {
  it('mounts without crashing', () => {
    expect(mount(<LanguageDropdown />)).toBeTruthy()
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<LanguageDropdown />)
    expect(wrapper.hasClass('language-dropdown')).toBe(true)
  })

  it('renders the name of the selected language', () => {
    const wrapper = shallow(<LanguageDropdown selectedLanguage={{name: "German"}} />)
    expect(wrapper.find('.selected').text()).toBe("German")
  })

  it('renders each language on the dropdown', () => {
    const wrapper  = shallow(<LanguageDropdown languages={languages} />)
    const dropdown = wrapper.find('.dropdown')

    expect(dropdown.find('.language').length).toBe(2)
    expect(dropdown.containsMatchingElement(<div className="language">German</div>)).toBe(true)
    expect(dropdown.containsMatchingElement(<div className="language">Italian</div>)).toBe(true)
  })

  it('highlights the selected language in the dropdown', () => {
    const selectedLanguage = {name: "German"}
    const wrapper = shallow(<LanguageDropdown languages={languages} selectedLanguage={selectedLanguage} />)

    expect(wrapper.find('.dropdown .language').first().hasClass('selected')).toBe(true)
    expect(wrapper.find('.dropdown .language').last().hasClass('selected')).toBe(false)
  })
})
