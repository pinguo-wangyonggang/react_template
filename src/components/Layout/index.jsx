import React , {Component} from 'react';
import { Layout, Icon, Dropdown, Menu,Avatar} from 'antd';
const { Header, Content, Footer} = Layout;
import AppRouter from "router/AppRouter";
import Nav from "components/Nav";
import './layout.css'

export default class AppLayout extends Component{
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
          <Layout style={{height:'100vh'}}>
            <Nav collapsed={this.state.collapsed}/>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                <AppRouter/>
              </Content>
              <Footer style={{textAlign:'center'}}>
                <span>金科 ©2018 Created by 金科</span>
              </Footer>
            </Layout>
          </Layout>
        );
      }
}