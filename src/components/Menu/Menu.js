import React, {Component} from 'react';

import './menu.css';

export default class Menu extends Component{
    render(){
        const classNames = this.props.theme ? 'vt-menu vt-menu-' + this.props.theme : 'vt-menu';
        return (
            <ul className={classNames} style={this.props.style}>
                {this.props.children}
            </ul>
        );
    }
}