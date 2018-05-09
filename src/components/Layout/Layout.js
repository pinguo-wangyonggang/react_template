import React, {Component} from 'react';

import './layout.css';

export default class Layout extends Component{
    render(){
        const classNames = this.props.hasSider ? 'vt-layout vt-layout-sider' : 'vt-layout';
        return (
            <div className={classNames}>
            {this.props.children}
            </div>
        );
    }
}