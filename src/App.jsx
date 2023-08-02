import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import MyArticles from "./pages/MyArticles/MyArticles";

import userService from "./utils/userService";

function App() {

  const [user, setUser] = useState(userService.getUser());

  function handleSignUpOrLogin() {
    setUser(userService.getUser());
  }

  function handleLogout() {
    userService.logout(); 

    setUser(null);
  }

  if (!user) {
  
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
