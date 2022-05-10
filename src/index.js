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

// Utils
import { Helmet } from "react-helmet";
import Loadable from "react-loadable";
import Loader from "./components/styles/Loader.styled";

const LoadableArchive = Loadable({
  loader: () => import("./pages/Archive"),
  loading: () => <Loader></Loader>,
});

const LoadableNotFoundPage = Loadable({
  loader: () => import("./pages/NotFoundPage"),
  loading: () => <Loader></Loader>,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d14949" />
        <meta name="author" content="Diogo Santos" />
        <meta name="description" content="Welcome to my portfolio!" />
        <link rel="manifest" href="manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap"
          rel="stylesheet"
        ></link>
        <title>Diogo Santos</title>
      </Helmet>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/archive" component={LoadableArchive} />
        <Route path="*" component={LoadableNotFoundPage} />
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
