import React from 'react'
import LanguageCard from '../language-card'

import { mount, shallow } from 'enzyme'

const language = {
  name: "German",
  number_of_learners_decorated: "25.1M"
}

describe('LanguageCard component', () => {
  it('mounts without crashing', () => {
    expect(mount(<LanguageCard language={language} />)).toBeTruthy()
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<LanguageCard language={language} />)
    expect(wrapper.hasClass('language-card')).toBe(true)
  })

  it('renders the language name', () => {
    const wrapper = shallow(<LanguageCard language={language} />)
    expect(wrapper.find('.name').text()).toBe("German")
  })

  it('renders the amount of decorated learners', () => {
    const wrapper = shallow(<LanguageCard language={language} />)
    expect(wrapper.find('.learners').text()).toBe("25.1M")
  })

  it('dispatches props.onSelected with language when clicked', () => {
    const onSelected = jest.fn()
    const wrapper = shallow(<LanguageCard onSelected={onSelected} language={language} />)

    wrapper.find('article').simulate('click')
    expect(onSelected.mock.calls.length).toBe(1)
    expect(onSelected.mock.calls[0][0]).toEqual(language)
  })
})
