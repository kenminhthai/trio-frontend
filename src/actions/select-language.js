import { createAction } from 'redux-actions'

export const selectLanguage =
  createAction('SELECT_LANGUAGE', language => language)
