import React, { useState } from "react";
import { Auth, Main } from "./layouts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Home } from "./pages";
import { Login } from "./auth";

function App() {
  const [cookies, setCookie] = useCookies(["user"]);

  return (
    <>
      <Router>
        <Switch>
          {cookies.user ?? (
            <Route path="/(login|register)/">
              <Auth>
                <Switch>
                  <Route exact path="/login" component={Login} />
                </Switch>
              </Auth>
            </Route>
          )}

          <Route>
            <Main>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Main>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
