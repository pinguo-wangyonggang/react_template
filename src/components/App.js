import React , {Component}from 'react';
import { BrowserRouter as Router, NavLink as Link } from "react-router-dom";

import Menu from "components/Menu/Menu";
import MenuItem from "components/MenuItem/MenuItem";
import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";
import Content from "components/Content/Content";
import Footer from "components/Footer/Footer";
import Sider from "components/Sider/Sider";
import RootRouter from "router/RootRouter";
import './app.css';

export default class App extends Component{
    render(){
        return (
            <Router>
                <Layout>
                    <Header style={{background:'#fff'}}>
                        <Menu>
                            <MenuItem>
                                <Link exact to="/"> Home </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/page1"> Page </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/counter"> Counter </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/userinfo"> UserInfo </Link>
                            </MenuItem>
                        </Menu>
                    </Header>
                    <Content>
                        <RootRouter/>
                    </Content>
                    <Footer>
                        <span>Copyright</span>
                    </Footer>
                </Layout> 
            </Router>
        );
    }
}