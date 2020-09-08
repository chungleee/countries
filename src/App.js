import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import CountryPage from "./components/CountryPage";
import CountryList from "./components/CountryList";

const App = () => {
  return (
    <Router>
      <div className="bg-primaryWhite text-darkBlue">
        <Header />
        <main className="px-8 bg-veryLightGray">
          <Route exact path="/" component={CountryList} />
          <Route path="/country/:name" component={CountryPage} />
        </main>
      </div>
    </Router>
  );
};

export default App;
