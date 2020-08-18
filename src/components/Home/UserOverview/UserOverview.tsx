import React, { Suspense } from "react";
import User from "./../../../models/user";

const UserOverview = () => {
  let user: User = {
    displayName: "",
    username: "",
    roundsCompleted: 0,
    level: "",
    lastScore: 0,
    points: 0,
  };

  const username = "smithy@s.com";
  const apiUrl = `http://localhost:3000/api`;
  const req = `/users/stats/${username}`;
  fetch(`${apiUrl}${req}`)
    .then((res) => res.json())
    .then((data) => {
      user = data;
      console.log("user 97: ", user);
    });

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      {user.displayName}
    </Suspense>
  );
};

export default UserOverview;
