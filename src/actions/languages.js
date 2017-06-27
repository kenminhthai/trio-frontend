import { get } from '../api'
import { createAction } from 'redux-actions'

export const requestLanguages = createAction('REQUEST_LANGUAGES')
export const receiveLanguages = createAction('RECEIVE_LANGUAGES', languages => languages)

export const fetchLanguages = () => {
  return (dispatch) => {
    dispatch(requestLanguages())

    return get('/languages').then((langs) => {
      dispatch(receiveLanguages(langs))
    })
  }
}
