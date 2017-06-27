import * as actions from '../../actions/languages'
import languagesReducer from '../languages'

describe('languageListReducer', () => {
  it('sets state to an empty array by default', () => {
    const state  = undefined
    const action = {type: "unknown"}

    expect(languagesReducer(state, action)).toEqual([])
  })

  it('returns fetching state on REQUEST_LANGUAGE_LIST', () => {
    const state  = undefined
    const action = actions.requestLanguages()

    expect(languagesReducer(state, action)).toEqual({
      isFetching: true
    })
  })

  it('returns payloaded state on RECEIVE_LANGUAGE_LIST', () => {
    const state  = {isFetching: true}
    const action = actions.receiveLanguages("languages")

    expect(languagesReducer(state, action)).toEqual("languages")
  })
})
