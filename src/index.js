import React from "react";
import { render } from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Archive from "./pages/Archive";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/archive" component={Archive} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
