import React, { useEffect, useState } from "react";

const Courses = (props) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses", {
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
      .then((response) => setCourses(response.courses))
      .catch((error) => setCourses(error.message));

    fetch("/admin", {
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
      .then((response) => console.log(response))
      .catch((error) => setCourses(error.message));
  }, [props]);

  return (
    <ul>
      {courses.map((course) => {
        return <li key={course.id}>{course.title}</li>;
      })}
    </ul>
  );
};

export default Courses;
