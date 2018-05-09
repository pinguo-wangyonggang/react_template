import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Bundle from "./Bundle";

import Home from "bundle-loader?lazy&name=home!pages/Home/Home";
import Page1 from "bundle-loader?lazy&name=page1!pages/Page1/Page1";
import Counter from "bundle-loader?lazy&name=counter!pages/Counter/Counter";
import UserInfo from "bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo";
import Loading from "components/Loading/Loading";
import Menu from "components/Menu/Menu";
import MenuItem from "components/MenuItem/MenuItem";
import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";
import Content from "components/Content/Content";
import Footer from "components/Footer/Footer";
import Sider from "components/Sider/Sider";

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
);

export default class RootRouter extends Component{
  render(){
    return (
      <Router>
      <Layout>
      <Header>
        <Menu style={{lineHeight:'64px'}} theme="dark">
          <MenuItem>
          <Link to = "/"> Home </Link>
          </MenuItem>
          <MenuItem>
          <Link to="/page1">Page1</Link>
          </MenuItem>
          <MenuItem>
          <Link to="/counter">Counter</Link>
          </MenuItem>
          <MenuItem>
          <Link to="/userinfo">UserInfo</Link>
          </MenuItem>          
        </Menu>
        </Header>
        <Layout hasSider={true}>
          <Sider>
            sider
          </Sider>
          <Layout>
          <Content>
        <Switch>
          <Route exact path="/" component={createComponent(Home)} />
          <Route path="/page1" component={createComponent(Page1)} />
          <Route path="/counter" component={createComponent(Counter)} />
          <Route path="/userinfo" component={createComponent(UserInfo)} />
        </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <span>Copyright</span>
        </Footer>
        </Layout>
        </Layout>
        </Layout>
      </Router>
    );
  }
}