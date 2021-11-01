export const BASE_URL = 'http://localhost:3000';

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    })
    .then(checkedResponse);

}

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
      })
      .then(checkedResponse);
}

export const checkToken = (token) => {
    return fetch (`${BASE_URL}/users/me`, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(checkedResponse);

}

const checkedResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}