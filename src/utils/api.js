class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _request(path, method, body) {
    const jwt = localStorage.getItem("jwt");
    const headers = jwt
      ? { authorization: `Bearer ${jwt}`, ...this._headers }
      : this._headers;
    return fetch(`${this._url}/${path}`, {
      method,
      headers: headers,
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }

}

class NewsApi

const newsApi = new Api({
  baseUrl: "https://newsapi.org",
  headers: {
    "Content-Type": "application/json",
  },
});

const dbApi = new Api({
  baseUrl: "https://newsapi.org",
  headers: {
    "Content-Type": "application/json",
  },
});
