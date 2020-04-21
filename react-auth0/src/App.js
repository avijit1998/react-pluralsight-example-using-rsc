import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import Public from "./Public";
import Private from "./Private";
import Courses from "./Courses";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "./AuthContext";

function App(props) {
  const [auth] = useState(new Auth(props.history));
  const [tokenRenewalComplete, setTokenRenewalComplete] = useState(false);

  useEffect(() => {
    auth.renewToken(() => {
      setTokenRenewalComplete(true);
    });
  }, [auth]);

  if (!tokenRenewalComplete) return "Loading...";
  return (
    <AuthContext.Provider value={auth}>
      <Nav auth={auth} />
      <div className="body">
        <Route path="/" exact component={Home} />
        <Route path="/callback" render={(props) => <Callback {...props} />} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/public" component={Public} />
        <PrivateRoute path="/private" component={Private} />
        <PrivateRoute
          path="/courses"
          component={Courses}
          scopes={["read:courses"]}
        />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
