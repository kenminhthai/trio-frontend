import { combineReducers } from 'redux'
import languagesReducer from './languages'

export default combineReducers({
  languages: languagesReducer
})
