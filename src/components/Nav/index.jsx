import React , {Component} from 'react';
import { NavLink as Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
import navData from "./nav.config";

export default class Nav extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Sider
              trigger={null}
              collapsible
              collapsed={this.props.collapsed}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {navData.map((item, index)=>{
                    if (item.children){
                        return <Menu.SubMenu
                            key={index}
                            title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}
                        >
                        {item.children.map((subitem, idx) => {
                            return <Menu.Item key={index + '-' + idx}>
                                <span>{subitem.name}</span><Link exact to={subitem.url} replace></Link>
                            </Menu.Item>
                        })}
                        </Menu.SubMenu>
                    }
                    else{
                        return <Menu.Item key={index}>
                             <Icon type={item.icon}/><span>{item.name}</span><Link exact to={item.url} replace></Link>
                        </Menu.Item>
                    }
                })}
              </Menu>
            </Sider>
        )
    }
}