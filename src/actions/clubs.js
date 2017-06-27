import { get } from '../api'
import { createAction } from 'redux-actions'

export const requestClubs = createAction('REQUEST_CLUBS')
export const receiveClubs = createAction('RECEIVE_CLUBS', clubs => clubs)

export const fetchClubs = () => {
  return (dispatch) => {
    dispatch(requestClubs())

    return get('/clubs').then((clubs) => {
      dispatch(receiveClubs(clubs))
    })
  }
}
