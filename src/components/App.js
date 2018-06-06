import React , {Component}from 'react';
import { HashRouter as Router, NavLink as Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import RootRouter from "router/RootRouter"
import './app.css'

export default class App extends Component{
    state = {
        collapsed: false,
      };
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
      render() {
        return (
          <Router>
          <Layout style={{height:'100vh'}}>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="picture"/><span>Dashboard</span><Link exact to="/"></Link>
                </Menu.Item>
                <Menu.Item key="2">
                <Icon type="user"/><span>用户中心</span><Link to="/usercenter"></Link>
              </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <RootRouter></RootRouter>
              </Content>
              <Footer style={{textAlign:'center'}}>
                <span>金科 ©2018 Created by 金科</span>
              </Footer>
            </Layout>
          </Layout>
          </Router>
        );
      }
}