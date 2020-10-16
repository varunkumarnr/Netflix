import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, SignUp, Signin } from "./pages/index";
function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SIGNIN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.SIGNUP}>
        <SignUp />
      </Route>
    </Router>
  );
}
export default App;
