import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import App from "./components/app";
import "../static/styles/main.scss"

ReactDOM.render(
    <Router>
      <CssBaseline />
      <Container fixed>
        <App />
      </Container>
    </Router>,
    document.getElementById("root")
);
  