import { requestClubs, fetchClubs, receiveClubs } from '../clubs'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const mockStore = configureMockStore([thunk])

describe('requestClubs', () => {
  it('returns a REQUEST_CLUBS action creator', () => {
    const action = requestClubs()
    expect(action).toEqual({type: 'REQUEST_CLUBS'})
  })
})

describe('receiveClubs', () => {
  it('returns a RECEIVE_CLUBS action creator', () => {
    const action = receiveClubs("clubs")
    expect(action).toEqual({type: 'RECEIVE_CLUBS', payload: "clubs"})
  })
})

describe('fetchClubs', () => {
  it('returns a thunk which dispatches request and receive', () => {
    const store = mockStore()

    nock('https://api.duolingoclubs.com')
      .get('/clubs')
      .reply(200, {data: {clubs: ["Awesome Club"]}})

    return store.dispatch(fetchClubs()).then(
      () => expect(store.getActions()).toEqual([
        {type: 'REQUEST_CLUBS'},
        {type: 'RECEIVE_CLUBS', payload: {clubs: ["Awesome Club"]}}
      ])
    )
  })
})
