import {
  requestClubs,
  fetchClubs,
  receiveClubs,
  fetchLanguageClubs,
  clubCreated
} from '../clubs'

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

describe('clubCreated', () => {
  it('returns a CLUB_CREATED action creator', () => {
    const action = clubCreated("new club")
    expect(action).toEqual({type: 'CLUB_CREATED', payload: "new club"})
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

describe('fetchLanguageClubs', () => {
  it('returns a think which dispatches request and receive', () => {
    const store = mockStore()

    nock('https://api.duolingoclubs.com')
      .get('/languages/50/clubs')
      .reply(200, {data: {clubs: ["Super Club"]}})

    return store.dispatch(fetchLanguageClubs(50)).then(
      () => {
        expect(store.getActions()).toEqual([
          {type: 'REQUEST_CLUBS'},
          {type: 'RECEIVE_CLUBS', payload: {clubs: ["Super Club"]}}
        ])
      }
    )
  })
})
