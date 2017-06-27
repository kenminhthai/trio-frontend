import { handleActions } from 'redux-actions'
import { requestClubs, receiveClubs } from '../actions/clubs'

export default handleActions({
  [requestClubs]: (state, action) => ({isFetching: true}),
  [receiveClubs]: (state, action) => action.payload
}, [])
