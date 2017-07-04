import React from 'react'
import LanguageDropdown from '../language-dropdown'

import { mount, shallow } from 'enzyme'

const languages = [
  {name: "German", language_code: 'de'},
  {name: "Italian", language_code: 'it'}
]

describe('LanguageDropdown', () => {
  it('mounts without crashing', () => {
    expect(mount(<LanguageDropdown />)).toBeTruthy()
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<LanguageDropdown />)
    expect(wrapper.hasClass('language-dropdown')).toBe(true)
  })

  it('sets default state.showDropdown to false', () => {
    const wrapper = mount(<LanguageDropdown />)
    expect(wrapper.state().showDropdown).toBe(false)
  })

  it('toggles state.showDropdown when the root element is clicked', () => {
    const wrapper = shallow(<LanguageDropdown />)
    wrapper.setState({showDropdown: false})

    wrapper.simulate('click')
    expect(wrapper.state().showDropdown).toBe(true)

    wrapper.simulate('click')
    expect(wrapper.state().showDropdown).toBe(false)
  })

  it('renders the country locale as a class name', () => {
    const language = {name: "German", language_code: "de"}
    const wrapper = shallow(<LanguageDropdown selectedLanguage={language} />)
    expect(wrapper.hasClass('de')).toBe(true)
  })

  it('renders "Select a Language" if no language has been selected', () => {
    const wrapper = shallow(<LanguageDropdown selectedLanguage={{}} />)
    expect(wrapper.find('.selected-language').text()).toBe('Select a language')
  })

  it('renders the name of the selected language', () => {
    const wrapper = shallow(<LanguageDropdown selectedLanguage={{name: "German"}} />)
    expect(wrapper.find('.selected-language').text()).toBe("German")
  })

  it('renders each language on the dropdown', () => {
    const wrapper  = shallow(<LanguageDropdown languages={languages} />)
    wrapper.setState({showDropdown: true})

    const dropdown = wrapper.find('.dropdown')
    expect(dropdown.find('.language').length).toBe(2)
    expect(dropdown.containsMatchingElement(<div className="language"><span className="de">German</span></div>)).toBe(true)
    expect(dropdown.containsMatchingElement(<div className="language"><span className="it">Italian</span></div>)).toBe(true)
  })

  it('renders a loading message in the dropdown if languages are fetching', () => {
    const wrapper = shallow(<LanguageDropdown languages={{isFetching: true}} />)
    wrapper.setState({showDropdown: true})

    expect(wrapper.find('.dropdown .loading').text()).toBe('Loading ...')
    expect(wrapper.find('.dropdown').children().length).toBe(1)
  })

  it('highlights the selected language in the dropdown', () => {
    const selectedLanguage = {name: "German"}
    const wrapper = shallow(<LanguageDropdown languages={languages} selectedLanguage={selectedLanguage} />)
    wrapper.setState({showDropdown: true})

    expect(wrapper.find('.dropdown .language').first().hasClass('selected')).toBe(true)
    expect(wrapper.find('.dropdown .language').last().hasClass('selected')).toBe(false)
  })
})
