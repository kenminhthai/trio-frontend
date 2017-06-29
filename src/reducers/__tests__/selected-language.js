import * as actions from '../../actions/select-language'
import selectedLanguageReducer from '../selected-language'

describe('selectedLanguageReducer', () => {
  it('sets statea to an empty object by default', () => {
    const state  = undefined
    const action = {type: 'unknown'}

    expect(selectedLanguageReducer(state, action)).toEqual({})
  })

  it('sets state equal to the action payload on SELECT_LANGUAGE', () => {
    const state  = undefined
    const action = actions.selectLanguage('language')

    expect(selectedLanguageReducer(state, action)).toEqual('language')
  })
})
