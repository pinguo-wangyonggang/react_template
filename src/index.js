import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import RootRouter from "router/RootRouter";

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById("app")
);