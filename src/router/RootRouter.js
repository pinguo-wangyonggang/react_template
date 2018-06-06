import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Bundle from "./Bundle";

import Dashboard from "bundle-loader?lazy&name=dashboard!pages/Dashboard/Dashboard";
import Usercenter from "bundle-loader?lazy&name=usercenter!pages/Usercenter/Usercenter";
const createComponent = component => props => (
    <Bundle load={component}>
      {Component => (Component ? <Component {...props} /> : "")}
    </Bundle>
  );

export default class RootRouter extends Component {
    render() {
        return ( 
            <Switch >
                < Route exact path = "/" component = { createComponent(Dashboard) }/> 
                < Route path = "/dashboard" component = { createComponent(Dashboard) }/>
                < Route path = "/usercenter" component = { createComponent(Usercenter) }/> 
            </Switch>
        );
    }
}