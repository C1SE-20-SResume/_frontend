import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Login } from "./auth";
import { Home, JobDetail, Scan } from "./pages";
import { useCookies } from "react-cookie";

function Candidate() {
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
        {!cookies.user && (
          <Route path="/login">
            <Login />
          </Route>
        )}
        <Route path="/job-detail/:id">
          <JobDetail />
        </Route>
        <Route path="/scan">
          <Scan />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}
function Recuiter() {
  // ...
}
function App() {
  const [cookies] = useCookies(["user"]);
  const [user, setUser] = useState({
    role: 1,
  });

  return <>{user.role === 0 ? <Candidate /> : <Recuiter />}</>;
}

export default App;
