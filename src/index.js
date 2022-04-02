import React from "react";

// Routes
import { render } from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Styled Components
import GlobalStyles from "./components/styles/utils/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./components/styles/utils/Themes";

// Pages
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/archive" component={Archive} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  );
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
