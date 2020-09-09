import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import CountryPage from "./components/CountryPage";
import CountryList from "./components/CountryList";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    console.log(darkMode);
  }, []);

  return (
    <Router>
      <div
        className={`bg-primaryWhite ${
          darkMode ? "text-primaryWhite" : "text-darkBlue"
        }`}
      >
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main
          className={`px-8 bg-veryLightGray ${
            darkMode ? "bg-darkModeDarkBlue" : null
          }`}
        >
          <Route
            exact
            path="/"
            render={(props) => {
              return <CountryList {...props} darkMode={darkMode} />;
            }}
          />
          <Route
            path="/country/:name"
            render={(props) => {
              return <CountryPage {...props} darkMode={darkMode} />;
            }}
          />
        </main>
      </div>
    </Router>
  );
};

export default App;
