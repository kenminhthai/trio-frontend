import { combineReducers } from 'redux'
import languagesReducer from './languages'
import selectedLanguageReducer from './selected-language'

export default combineReducers({
  languages: languagesReducer,
  selectedLanguage: selectedLanguageReducer
})
