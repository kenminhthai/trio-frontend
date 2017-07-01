import { combineReducers } from 'redux'
import languagesReducer from './languages'
import clubsReducer from './clubs'
import selectedLanguageReducer from './selected-language'

export default combineReducers({
  languages: languagesReducer,
  clubs: clubsReducer,
  selectedLanguage: selectedLanguageReducer
})
