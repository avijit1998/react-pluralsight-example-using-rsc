import React, { useEffect, useState } from "react";

const Private = (props) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/private", {
      headers: {
        Authorization: `Bearer ${props.auth.getAccessToken()}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setMessage(response.message))
      .catch((error) => setMessage(error.message));
  }, [props]);
  return <div>{message}</div>;
};

export default Private;
