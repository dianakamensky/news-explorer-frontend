import Api from "./api";

class MainApi extends Api {
  deleteArticle(id) {
    return this._requestJ(`articles/${id}`, "DELETE");
  }

  getUserInfo() {
    return this._requestJ("users/me", "GET");
  }

  authorize(email, password) {
    return this._requestJ("signin", "POST", { password, email }).then(
      (data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
        }
        return data;
      }
    );
  }
}

const mainApi = new MainApi({
  baseUrl: "https://NewsExplorer.students.nomoredomainssbs.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
