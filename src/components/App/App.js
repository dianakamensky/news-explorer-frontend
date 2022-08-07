import React from "react";

function App(props) {
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header></Header>
      <Main></Main>
      <Switch>
        <ProtectedRoute loggedIn={loggedIn} exact path="/" component={Main} />
        <ProtectedRoute
          loggedIn={loggedIn}
          path="/saved-news"
          component={SavedNews}
        />
        ;
      </Switch>
      <Footer></Footer>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
