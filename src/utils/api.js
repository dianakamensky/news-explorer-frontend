export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _request(path, method, body, headers = {}) {
    const url = new URL(`${this._url}/${path}`);
    if (method === "GET") {
      Object.keys(body || {}).forEach((key) =>
        url.searchParams.append(key, body[key])
      );
    }
    const allHeaders = { ...this._headers, ...headers };
    return fetch(url, {
      method,
      headers: allHeaders,
      body: method === "GET" ? null : JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }

  _requestJ(path, method, body, headers = {}) {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      headers.authorization = `Bearer ${jwt}`;
    }
    return this._request(path, method, body, headers);
  }

  register(email, password) {
    return this._request("signup", "POST", { password, email });
  }

  authorize(email, password) {
    return this._request("signin", "POST", { password, email }).then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
      }
      return data;
    });
  }
}
