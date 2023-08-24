import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/header-section/MainHeader";
import NavigationBar from "./components/navigation-section/NavigationBar";
import Auth from "./components/auth";
import MainIndex from "./components/pet-section/MainIndex";

function App() {
  const [token, setToken] = useState("");

  function updateToken(newToken) {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <div>
      <MainHeader />
      <NavigationBar />
      {token ? <MainIndex token={token} /> : <Auth updateToken={updateToken} />}
    </div>
  );
}

export default App;
