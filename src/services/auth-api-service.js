
import config from '../config';


const AuthApiService = {
  postLogin(creds) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(creds),
    })
    .then(res =>
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json())
  },
}

export default AuthApiService;