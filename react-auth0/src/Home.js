import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";

const Home = () => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <div>
          <h1>Home</h1>
          {auth.isAuthenticated() ? (
            <Link to="/profile">View Profile</Link>
          ) : (
            <button onClick={auth.login}>Log In</button>
          )}
        </div>
      )}
    </AuthContext.Consumer>
  );
};

export default Home;
