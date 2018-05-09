import React, {Component} from 'react';

import './sider.css';

export default class Sider extends Component{
    render(){
        return (
            <div className="vt-sider" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}