import React, { useState } from "react";
import { Auth, Main } from "./layouts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  Home,
  ListJob,
  JobDetail,
  QuizTest,
  Profile,
  Recruiter,
} from "./pages";
import { Login } from "./auth";

function App() {
  const [cookies] = useCookies(["user"]);

  const [userInfo, setUserInfo] = useState({});

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
            <Main setUserInfo={setUserInfo}>
              <Switch>
                <Route exact path="/home">
                  <Home role={userInfo.role_level} title="Home" />
                </Route>
                <Route exact path="/job/:id">
                  <JobDetail role={userInfo.role_level} />
                </Route>
                <Route exact path="/job">
                  <ListJob role={userInfo.role_level} title="Job List" />
                </Route>

                {cookies.user && (
                  <Route exact path="/quiz-test">
                    <QuizTest title="Quiz Test" />
                  </Route>
                )}

                {cookies.user && (
                  <Route exact path="/profile">
                    <Profile userInfo={{ ...userInfo }} title="Profile" />
                  </Route>
                )}

                {cookies.user && (
                  <Route exact path="/for-recruiter">
                    <Recruiter
                      userInfo={{ ...userInfo }}
                      title="For Recruiter"
                    />
                  </Route>
                )}
                <Route exact>
                  <Home role={userInfo.role_level} title="Home" />
                </Route>
              </Switch>
            </Main>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
