import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import MyArticles from "./pages/MyArticles/MyArticles";

import userService from "./utils/userService";
// ANY Component rendered by a ROUTE, goes in the pages folder!
// Client side routing, Just for showing or hiding components based on the address
// in the url
function App() {
  // this will the get token from localstorage and decode it when the page loads up
  // and set it as our initial state
  // if there is a token, user will be the user object, if there is not token user will null
  const [user, setUser] = useState(userService.getUser());

  // update our state everytime someones signs up or logs in, (in handleSubmit of LoginPage and SignupPage)
  // so we want to make sure we get the most recent token being made
  function handleSignUpOrLogin() {
    setUser(userService.getUser());
  }

  function handleLogout() {
    userService.logout(); // removing the jwt token from local storage.
    // set the user to null so we don't have the previously logged in user
    // in our state
    setUser(null);
  }

  if (!user) {
    // if the user is not logged in only render the following routes
    return (
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  // If the user is logged in render the following routes

  return (
    <Routes>
      <Route
        path="/"
        element={<ArticlePage user={user} handleLogout={handleLogout} />}
      />
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/:username"
        element={<MyArticles user={user} handleLogout={handleLogout} />}
      />
    </Routes>
  );
}

export default App;
