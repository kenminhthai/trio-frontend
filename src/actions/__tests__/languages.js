import {
  requestLanguages,
  fetchLanguages,
  receiveLanguages 
} from '../languages'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const mockStore = configureMockStore([thunk])

describe('requestLanguages', () => {
  it('returns a REQUEST_LANGAUGES action creator', () => {
    const action = requestLanguages()
    expect(action).toEqual({type: 'REQUEST_LANGUAGES'})
  })
})

describe('receiveLanguageList', () => {
  it('returns a RECEIVE_LANGUAGES action creator', () => {
    const action = receiveLanguages("languages")
    expect(action).toEqual({
      type: 'RECEIVE_LANGUAGES',
      payload: "languages"
    })
  })
})

describe('fetchLanguages', () => {
  it('returns a thunk which dispatches request and receive', () => {
    const store = mockStore()

    nock('https://api.duolingoclubs.com')
      .get('/languages')
      .reply(200, {data: {languages: ["English"]}})

    return store.dispatch(fetchLanguages()).then(
      () => expect(store.getActions()).toEqual([
        {type: 'REQUEST_LANGUAGES'},
        {type: 'RECEIVE_LANGUAGES', payload: {languages: ["English"]}}
      ])
    )
  })
})
