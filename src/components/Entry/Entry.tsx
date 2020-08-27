import React from "react";
import Home from "./../Home/Home";
import Auth from "./../Auth/Auth";

const Entry: React.FC = () => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return <Home />;
  } else {
    return <Auth />;
  }
};

export default Entry;
