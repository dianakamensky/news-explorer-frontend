export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _request(path, method, body, headers = {}) {
    const url = new URL(`${this._url}/${path}`);
    if (method === "GET") {
      Object.keys(body).forEach((key) =>
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
}
