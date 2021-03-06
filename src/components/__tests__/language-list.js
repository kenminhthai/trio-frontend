import React from 'react'
import PropTypes from 'prop-types'
import LanguageList from '../language-list'
import LanguageCard from '../language-card'

import td from 'testdouble'
import { mount, shallow } from 'enzyme'

const languages = [
  {id: 1, name: "German", number_of_learners_decorated: "25.1M"},
  {id: 2, name: "Italian", number_of_learners_decorated: "30.5M"}
]

describe('LanguageList component', () => {
  it('mounts without crashing', () => {
    expect(mount(<LanguageList languages={languages} />)).toBeTruthy()
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<LanguageList languages={languages} />)
    expect(wrapper.hasClass('language-list')).toBe(true)
  })

  it('renders a loading message when props.languages.isFetching', () => {
    const wrapper = shallow(<LanguageList languages={{isFetching: true}} />)
    expect(wrapper.containsMatchingElement(<p>Loading ...</p>)).toBe(true)
    expect(wrapper.find(LanguageCard).length).toBe(0)
  })

  it('renders a LanguageCard for each element of props.languages', () => {
    const wrapper = shallow(<LanguageList languages={languages} />)

    expect(wrapper.containsMatchingElement(
      <LanguageCard key={0} language={languages[0]} />
    )).toBe(true)

    expect(wrapper.containsMatchingElement(
      <LanguageCard key={1} language={languages[1]} />
    )).toBe(true)

    expect(wrapper.find(LanguageCard).length).toBe(2)
  })

  it('sets the selected LanguageCard as selected', () => {
    const selectedLanguage = {name: "German"}
    const wrapper = shallow(<LanguageList selectedLanguage={selectedLanguage} languages={languages} />)

    expect(wrapper.find(LanguageCard).first().props().selected).toBe(true)
    expect(wrapper.find(LanguageCard).last().props().selected).toBe(false)
  })

  it('dispatches onLanguageSelected when a LanguageCard is selected', () => {
    const onLanguageSelected = td.function()
    const wrapper = shallow(<LanguageList onLanguageSelected={onLanguageSelected} languages={languages} />)

    wrapper.find(LanguageCard).first().props().onSelected('language')
    td.verify(onLanguageSelected('language'), {times: 1})
  })
})
