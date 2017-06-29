import { handleActions } from 'redux-actions'
import { selectLanguage } from '../actions/select-language'

export default handleActions({
  [selectLanguage]: (state, action) => action.payload
}, {})
