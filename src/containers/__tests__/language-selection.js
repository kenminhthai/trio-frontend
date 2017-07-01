import React from 'react'

import {
  LanguageSelection,
  mapStateToProps,
  mapDispatchToProps
} from '../language-selection'

import LanguageList from '../../components/language-list'
import attention from '../../assets/images/characters/attention.svg'

import { mount, shallow } from 'enzyme'

describe('LanguageSelection component', () => {
  it('mounts without crashing', () => {
    expect(mount(<LanguageSelection />)).toBeTruthy()
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<LanguageSelection />)
    expect(wrapper.hasClass('language-selection')).toBe(true)
  })

  it('renders the Attention character', () => {
    const wrapper = shallow(<LanguageSelection />)
    expect(wrapper.containsMatchingElement(
      <img src={attention} alt="" width="78" height="72" />
    ))
  })

  it('renders an instruction header', () => {
    const wrapper = shallow(<LanguageSelection />)
    expect(wrapper.find('h1').text()).toEqual('To get started, select a language.')
  })

  it('dispatches fetchLanguages when mounted', () => {
    const fetchLanguages = jest.fn()
    const wrapper = shallow(<LanguageSelection fetchLanguages={fetchLanguages} />)

    wrapper.instance().componentDidMount()
    expect(fetchLanguages.mock.calls.length).toBe(1)
  })

  it('renders a LanguageList component and passes down props.languages', () => {
    const wrapper = shallow(<LanguageSelection languages="langs" />)
    expect(wrapper.find(LanguageList).length).toBe(1)
    expect(wrapper.find(LanguageList).first().props().languages).toBe('langs')
  })

  it('dispatches selectLanguage when a language is selected in LanguageList', () => {
    const selectLanguage = jest.fn()
    const wrapper = shallow(<LanguageSelection selectLanguage={selectLanguage} />)

    wrapper.find(LanguageList).props().onLanguageSelected('language')
    expect(selectLanguage.mock.calls.length).toBe(1)
    expect(selectLanguage.mock.calls[0][0]).toBe('language')
  })

  it('passes down the selected language to LanguageList', () => {
    const wrapper = shallow(<LanguageSelection selectedLanguage='selected' />)
    expect(wrapper.find(LanguageList).props().selectedLanguage).toBe('selected')
  })

  it('renders a "Done" button when a language is selected', () => {
    const wrapper = shallow(<LanguageSelection selectedLanguage={{name: "German"}} />)
    const done = wrapper.find('.btn-done')

    expect(done.text()).toBe('Done, show me German clubs')
    expect(wrapper.find('.btn-waiting').length).toBe(0)
  })

  it('renders a disabled "Select a Language" button when a language is not selected', () => {
    const wrapper = shallow(<LanguageSelection selectedLanguage={{}} />)
    const waiting = wrapper.find('.btn-waiting')

    expect(waiting.text()).toBe('Select a language, first.')
    expect(waiting.props().disabled).toBe(true)
    expect(wrapper.find('.btn-done').length).toBe(0)
  })
})

describe('mapStateToProps', () => {
  it('maps state.languages to props', () => {
    const state = {languages: 'langs'}
    const props = mapStateToProps(state)

    expect(props.languages).toEqual('langs')
  })

  it('maps state.selectLanguage to props', () => {
    const state = {selectedLanguage: 'selected language'}
    const props = mapStateToProps(state)

    expect(props.selectedLanguage).toBe('selected language')
  })
})

describe('mapDispatchToProps', () => {
  it('maps selectLanguage to props', () => {
    const dispatch = jest.fn()
    const props = mapDispatchToProps(dispatch)

    expect(typeof props.selectLanguage).toBe('function')
  })

  it('maps fetchLanguages to props', () => {
    const dispatch = jest.fn()
    const props = mapDispatchToProps(dispatch)

    expect(typeof props.fetchLanguages).toBe('function')
  })
})
