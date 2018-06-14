import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import AppLayout from "components/Layout";
import { HashRouter as Router} from "react-router-dom";

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(
  <Provider store={store}>
    <Router>
      <AppLayout />
    </Router>
  </Provider>,
  document.getElementById("app")
);