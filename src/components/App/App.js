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

function App({ props }) {
  const [currentUser, setCurrentUser] = React.useState({
    _id: "momo",
    name: "mama",
  });

  const [savedCards, setSavedCards] = React.useState([
    {
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedCardsContext.Provider value={savedCards}>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <ProtectedRoute
            path="/saved-news"
            component={SavedNews}
            loggedIn={currentUser._id}
          />
          ;
        </Switch>
        <Footer></Footer>
      </SavedCardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
