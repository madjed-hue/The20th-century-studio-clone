import "./App.css";
import BodyBottom from "./components/BodyBottom";
import BodyUp from "./components/BodyUp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slide from "./components/Slider";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Movies from "./components/Movies";
import Data from "./Data";
import MoviesNav from "./components/MoviesNav";

function App() {
  const [selectedOption, setSelectedOption] = useState(Data.fetchFeatured);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Detail/:id" exact>
            <Navbar />
            <Detail />
          </Route>
          <Route path="/Movies" exact>
            <Navbar />
            <MoviesNav setSelectedOption={setSelectedOption} />
            <Movies selectedOption={selectedOption} />
          </Route>
          <Route path="/">
            <Navbar />
            <Slide />
            <BodyUp />
            <BodyBottom />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
