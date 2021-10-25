import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";

import { Home } from "./pages";
function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/contact">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
