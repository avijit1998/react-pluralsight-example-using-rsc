import React, { useEffect, useContext } from "react";
import AuthContext from "./AuthContext";
const Callback = (props) => {
  const auth = useContext(AuthContext);
  // eslint-disable-next-line
  useEffect(() => {
    if (/access_token|id_token|error/.test(props.location.hash)) {
      auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback Url.");
    }
    // eslint-disable-next-line
  }, [props, Object.values(auth)]);
  return <h1>...Loading</h1>;
};

export default Callback;
