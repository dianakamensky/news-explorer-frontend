import React from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute";
import { Route, Switch, withRouter, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import { SavedCardsContext } from "../../contexts/SavedCardsContext";
import mainApi from "../../utils/MainApi";
import SignInPopup from "../Popups/SignInPopup";
import SignUpPopup from "../Popups/SignUpPopup";
import InfoToolTip from "../Popups/InfoToolTip";

function App({ props }) {
  React.useEffect(initLoggedIn, []);

  const [currentUser, setCurrentUser] = React.useState({
    _id: "momo",
    name: "mama",
  });

  const [savedCards, setSavedCards] = React.useState([
    {
      keyword: "Tesla",
      source: "Notebookcheck.net",
      author: "Daniel Zlatev",
      owner: currentUser,
      title:
        "Tesla Model Y in China now comes with extra airbag protection safety that the US factory version lacks",
      text: "The promised upgrade of Tesla's sprawling Gigafactory in Shanghai has brought the first tangible Model Y improvement in the form of a new airbag. The Chinese-made Model Ys are now shipping with a new driver seat airbag aimed to prevent driver-on-passenger inj…",
      link: "https://www.notebookcheck.net/Tesla-Model-Y-in-China-now-comes-with-extra-airbag-protection-safety-that-the-US-factory-version-lacks.639802.0.html",
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Model_Y_far_side_airbag.jpg",
      date: "2022-08-09T13:46:00Z",
    },
    {
      keyword: "Tesla",
      source: "Notebookcheck.net",
      author: "Daniel Zlatev",
      owner: currentUser,
      title:
        "Tesla Model Y in China now comes with extra airbag protection safety that the US factory version lacks",
      text: "The promised upgrade of Tesla's sprawling Gigafactory in Shanghai has brought the first tangible Model Y improvement in the form of a new airbag. The Chinese-made Model Ys are now shipping with a new driver seat airbag aimed to prevent driver-on-passenger inj…",
      link: "https://www.notebookcheck.net/Tesla-Model-Y-in-China-now-comes-with-extra-airbag-protection-safety-that-the-US-factory-version-lacks.639802.0.html",
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Model_Y_far_side_airbag.jpg",
      date: "2022-08-09T13:46:00Z",
    },
    {
      keyword: "Tesla",
      source: "Notebookcheck.net",
      author: "Daniel Zlatev",
      owner: currentUser,
      title:
        "Tesla Model Y in China now comes with extra airbag protection safety that the US factory version lacks",
      text: "The promised upgrade of Tesla's sprawling Gigafactory in Shanghai has brought the first tangible Model Y improvement in the form of a new airbag. The Chinese-made Model Ys are now shipping with a new driver seat airbag aimed to prevent driver-on-passenger inj…",
      link: "https://www.notebookcheck.net/Tesla-Model-Y-in-China-now-comes-with-extra-airbag-protection-safety-that-the-US-factory-version-lacks.639802.0.html",
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Model_Y_far_side_airbag.jpg",
      date: "2022-08-09T13:46:00Z",
    },
  ]);

  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);

  function deleteArticle(id) {
    mainApi
      .deleteArticle(id)
      .then(() => setSavedCards(savedCards.filter((c) => c._id !== id)))
      .catch((error) => console.log(error));
  }

  function closeAllPopups() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsInfoToolTipOpen(false);
  }

  function initLoggedIn() {
    mainApi
      .getUserInfo()
      .then((res) => {
        if (res) {
          setCurrentUser(res.data);
        } else setCurrentUser({});
      })
      .catch((err) => {
        console.log(err);
        setCurrentUser({});
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedCardsContext.Provider value={savedCards}>
        <Header
          openPopup={setIsSignInPopupOpen}
          logout={() => localStorage.removeItem("jwt")}
        ></Header>
        <Switch>
          <Route exact path="/">
            <Main deleteArticle={deleteArticle}></Main>
          </Route>
          <ProtectedRoute
            path="/saved-news"
            component={SavedNews}
            loggedIn={currentUser._id}
            deleteArticle={deleteArticle}
          />
          ;
        </Switch>
        <Footer></Footer>
      </SavedCardsContext.Provider>
      <SignInPopup
        isOpen={isSignInPopupOpen}
        onClose={closeAllPopups}
      ></SignInPopup>
      <SignUpPopup
        isOpen={isSignUpPopupOpen}
        onClose={closeAllPopups}
      ></SignUpPopup>
      <InfoToolTip
        isOpen={isInfoToolTipOpen}
        onClose={closeAllPopups}
      ></InfoToolTip>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
