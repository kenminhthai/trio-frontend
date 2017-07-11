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

  describe('post', () => {
    it('makes a POST request to the path and returns response parsed as JSON', () => {
      nock(mockEndpoint)
        .post('/languages/3/clubs', JSON.stringify("do a thing!"))
        .reply(200, {data: "response data!"})

      return api.post("/languages/3/clubs", "do a thing!").then(
        (response) => {
          expect(response.data).toBe("response data!")
        }
      )
    })
  })
})
