class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _checkedResponse(res) {
        if (res.ok) {
            // console.log(res.json())
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getAllMovies() {
        return fetch(this._url, {
            method: 'GET',
            headers: this._headers
        })
            .then(res => this._checkedResponse(res))
    }
}

const api = new Api({
    url: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;