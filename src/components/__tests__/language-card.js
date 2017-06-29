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
})
