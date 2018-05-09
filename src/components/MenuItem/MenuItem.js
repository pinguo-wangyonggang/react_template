import React, {Component} from 'react';

import './menuitem.css';

export default class MenuItem extends Component{
    render(){
        return (
            <li className="vt-menu-item">
                {this.props.children}
            </li>
        );
    }
}