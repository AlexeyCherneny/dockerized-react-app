import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import App from "./App";

import history from "./services/history";
import store from "./store";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router history={history}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
