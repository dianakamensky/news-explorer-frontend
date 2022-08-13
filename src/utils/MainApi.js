import Api from "./api";

class MainApi extends Api {
  deleteArticle(id) {
    return this._requestJ(`articles/${id}`, "DELETE");
  }

  getUserInfo() {
    return this._requestJ("users/me", "GET");
  }
}

const mainApi = new MainApi({
  baseUrl: "https://NewsExplorer.students.nomoredomainssbs.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
