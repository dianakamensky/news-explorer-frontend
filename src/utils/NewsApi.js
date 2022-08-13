import Api from "./api";

const key = "18c1993b19d4443e8477d3dd2f7e448f";

class NewsApi extends Api {
  getSearchResults(input) {
    const to = Date.now();
    const from = new Date(to - 7 * 24 * 60 * 60 * 1000);
    return this._request("everything", "GET", {
      q: input,
      apiKey: key,
      from,
      to,
      pageSize: 100,
    });
  }
}

const newsApi = new NewsApi({
  baseUrl: "https://nomoreparties.co/news/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export default newsApi;
