import React from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute";
import {
  Route,
  Switch,
  withRouter,
  useLocation,
  useHistory
} from "react-router-dom";
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
  const location = useLocation();
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(initLoggedIn, []);

  const [savedCards, setSavedCards] = React.useState([]);

  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [signUpMessage, setSignUpMessage] = React.useState(null);
  const [overlayOpen, setOverlayOpen] = React.useState(false);

  function getSavedArticles() {
    mainApi
      .getSavedArticles()
      .then((articles) => {
        setSavedCards(articles.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteArticle(id) {
    mainApi
      .deleteArticle(id)
      .then(() => setSavedCards(savedCards.filter((c) => c._id !== id)))
      .catch((error) => console.log(error));
  }

  function saveArticle(content, input) {
    mainApi
      .saveArticle(content, input)
      .then(() => {
        getSavedArticles();
      })
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
          setCurrentUser(res);
          getSavedArticles();
        } else signOut();
      })
      .catch((err) => {
        console.log(err);
        signOut();
      });
  }

  function signIn(email, password) {
    mainApi
      .authorize(email, password)
      .then((data) => {
        closeAllPopups();
        initLoggedIn();
        history.push("/saved-news");
      })
      .catch((res) => window.alert(res.statusText));
  }

  function signUp(email, password, name) {
    mainApi
      .register(email, password, name)
      .then((data) => {
        closeAllPopups();
        setIsInfoToolTipOpen(true);
      })
      .catch((res) =>
        res.json().then((data) => setSignUpMessage(data.message))
      );
  }

  function signOut() {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setSavedCards([]);
  }

  function openSignUp() {
    closeAllPopups();
    setIsSignUpPopupOpen(true);
  }

  function openSignIn() {
    closeAllPopups();
    setIsSignInPopupOpen(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedCardsContext.Provider value={savedCards}>
        <Header
          openPopup={setIsSignInPopupOpen}
          logout={signOut}
          toggleOverlay={setOverlayOpen}
        ></Header>
        {overlayOpen && <div className="app__overlay"></div>}
        <Switch>
          <Route exact path="/">
            <Main
              deleteArticle={deleteArticle}
              saveArticle={saveArticle}
            ></Main>
          </Route>
          <ProtectedRoute
            path="/saved-news"
            component={SavedNews}
            deleteArticle={deleteArticle}
          />
          ;
        </Switch>
        <Footer></Footer>
      </SavedCardsContext.Provider>
      <SignInPopup
        isOpen={isSignInPopupOpen}
        onClose={closeAllPopups}
        handleSubmit={signIn}
        openSignUp={openSignUp}
      ></SignInPopup>
      <SignUpPopup
        isOpen={isSignUpPopupOpen}
        onClose={closeAllPopups}
        handleSubmit={signUp}
        openSignIn={openSignIn}
        message={signUpMessage}
      ></SignUpPopup>
      <InfoToolTip
        isOpen={isInfoToolTipOpen}
        onClose={closeAllPopups}
        openSignIn={openSignIn}
      ></InfoToolTip>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
