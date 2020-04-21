import React, { useEffect, useState } from "react";

const Public = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/public")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setMessage(response.message))
      .catch((error) => setMessage(error.message));
  });
  return <div>{message}</div>;
};

export default Public;
