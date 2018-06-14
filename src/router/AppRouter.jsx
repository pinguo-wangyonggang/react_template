import React, { Component } from "react";

import { Route, Switch} from "react-router-dom";

import Bundle from "./Bundle";

import Dashboard from "bundle-loader?lazy&name=dashboard!pages/Dashboard";
import Usercenter from "bundle-loader?lazy&name=usercenter!pages/Usercenter";

import Loading from "components/Loading";  
const createComponent = component => props => (
    <Bundle load={component}>
      {Component => (Component ? <Component {...props} /> : <Loading/>)}
    </Bundle>
  );

export default class AppRouter extends Component {
    render() {
        return ( 
                <Switch>
                    < Route exact path = "/" component = { createComponent(Dashboard) }/> 
                    < Route path = "/dashboard" component = { createComponent(Dashboard) }/>
                    < Route path = "/usercenter" component = { createComponent(Usercenter) }/>
                </Switch>
            
        );
    }
}