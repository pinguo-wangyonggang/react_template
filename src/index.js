import React from 'react';
import ReactDom from 'react-dom';
import App from "components/App/App";
import { Provider } from "react-redux";
import store from "./redux/store";

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);