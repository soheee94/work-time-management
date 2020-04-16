import React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";

const LoginPage = loadable(() => import("./pages/LoginPage"));
const WorkTimePage = loadable(() => import("./pages/WorkTimePage"));

function App() {
  return (
    <Switch>
      <Route path="/" component={WorkTimePage} exact />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}

export default App;
