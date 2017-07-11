import fetch from 'isomorphic-fetch'

export const endpoint = process.env.NODE_ENV === "development"
  ? "http://127.0.0.1:4000"
  : "https://api.duolingoclubs.com"

export const get = (path) => {
  return fetch(`${endpoint}${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(r => r.json()).then(json => json.data)
}

export const post = (path, data) => {
  return fetch(`${endpoint}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(r => r.json()).then(json => json)
}
