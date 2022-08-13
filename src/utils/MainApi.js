import Api from "./api";

class MainApi extends Api {
  deleteArticle(id) {
    return this._requestJ(`articles/${id}`, "DELETE");
  }

  getUserInfo() {
    return this._requestJ("users/me", "GET");
  }

  authorize(email, password) {
    return this._request("signin", "POST", { password, email }).then(
      (data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
        }
        return data;
      }
    );
  }

  register(email, password, name) {
    return this._request("signup", "POST", { password, email, name });
  }

  getSavedArticles() {
    return this._requestJ("articles", "GET");
  }

  saveArticle(content, input) {
   return this._requestJ("/", "POST", {source: content.source.name, title: content.title, text: content.description, date: content.publishedAt, link: content.url, image: content.urlToImage, keyword: input});
  }
}

const mainApi = new MainApi({
  baseUrl: "https://NewsExplorer.students.nomoredomainssbs.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
