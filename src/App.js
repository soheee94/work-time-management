import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WorkTimePage from "./pages/WorkTimePage";

function App() {
  return (
    <Switch>
      <Route path="/" component={WorkTimePage} exact />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}

export default App;
