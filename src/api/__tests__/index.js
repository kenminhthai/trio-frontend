import * as api from '../index'
import nock from 'nock'

const mockEndpoint = "https://api.duolingoclubs.com"

describe('Trio API client', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  describe('get', () => {
    it('makes a GET request to the specified path', () => {
      nock(mockEndpoint)
        .get('/languages')
        .reply(200, {data: {languages: ["English"]}})

      return api.get('/languages').then(
        (languages) => {
          expect(languages).toEqual({languages: ["English"]})
        }
      )
    })
  })
})
