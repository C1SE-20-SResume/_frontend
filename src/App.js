import React from "react";
import { Auth, Main } from "./layouts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import { Home, ListJob, JobDetail, QuizTest, Profile } from "./pages";
import { Login } from "./auth";

function App() {
  const [cookies] = useCookies(["user"]);

  return (
    <>
      <BrowserRouter>
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
                <Route exact path="/job/:id" component={JobDetail} />
                <Route exact path="/job" component={ListJob} />

                {cookies.user && (
                  <Route exact path="/quiz-test" component={QuizTest} />
                )}

                {cookies.user && (
                  <Route exact path="/profile" component={Profile} />
                )}
                <Route exact component={Home} />
              </Switch>
            </Main>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
