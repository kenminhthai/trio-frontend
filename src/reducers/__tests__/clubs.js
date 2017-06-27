import * as actions from '../../actions/clubs'
import clubsReducer from '../clubs'

describe('clubsReducer', () => {
  it('sets state to an empty array by default', () => {
    const state  = undefined
    const action = {type: "unknown"}

    expect(clubsReducer(state, action)).toEqual([])
  })

  it('returns fetching state on REQUEST_CLUBS', () => {
    const state  = undefined
    const action = actions.requestClubs()

    expect(clubsReducer(state, action)).toEqual({
      isFetching: true
    })
  })

  it('returns the action payload on RECEIVE_CLUBS', () => {
    const state  = {isFetching: true}
    const action = actions.receiveClubs("clubs")

    expect(clubsReducer(state, action)).toEqual("clubs")
  })
})
