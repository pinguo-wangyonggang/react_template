import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "components/App";

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);