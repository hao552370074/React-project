import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import * as serviceWorker from "./serviceWorker";
import { Router, Link, Route } from "react-router-dom";
import history from "./history/history";

import { Provider } from "react-redux";
import store from './test-redux/ReactReduxStore'



export default class Hell extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <App></App>
        </Provider>
      </Router>
    );
  }
}

ReactDOM.render(<Hell></Hell>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
