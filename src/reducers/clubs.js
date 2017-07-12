import { handleActions } from 'redux-actions'
import { requestClubs, receiveClubs, clubCreated } from '../actions/clubs'

export default handleActions({
  [requestClubs]: (state, action) => ({isFetching: true}),
  [receiveClubs]: (state, action) => action.payload,
  [clubCreated]:  (state, action) => [action.payload, ...state]
}, [])
