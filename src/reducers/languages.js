import { handleActions } from 'redux-actions'
import { requestLanguages, receiveLanguages } from '../actions'

export default handleActions({
  [requestLanguages]: (state, action) => ({isFetching: true}),
  [receiveLanguages]: (state, action) => action.payload
}, [])
