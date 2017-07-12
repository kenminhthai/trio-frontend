import { get } from '../api'
import { selectLanguage } from './select-language'
import { createAction } from 'redux-actions'

export const requestClubs = createAction('REQUEST_CLUBS')
export const receiveClubs = createAction('RECEIVE_CLUBS', clubs => clubs)

export const clubCreated = createAction('CLUB_CREATED', newClub => newClub)

export const fetchClubs = () => {
  return (dispatch) => {
    dispatch(requestClubs())

    return get('/clubs').then((clubs) => {
      dispatch(receiveClubs(clubs))
    })
  }
}

export const fetchLanguageClubs = (language) => {
  return (dispatch) => {
    dispatch(selectLanguage(language))
    dispatch(requestClubs())

    return get(`/languages/${language.id}/clubs`).then((clubs) => {
      dispatch(receiveClubs(clubs))
    })
  }
}
