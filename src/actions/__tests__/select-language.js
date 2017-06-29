import { selectLanguage } from '../select-language'

describe('selectLanguage', () => {
  it('returns a SELECT_LANGUAGE action creator', () => {
    const action = selectLanguage('language')
    expect(action).toEqual({type: 'SELECT_LANGUAGE', payload: 'language'})
  })
})
