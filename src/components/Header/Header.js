import React, {Component} from 'react';

import './header.css';

export default class Header extends Component{
    render(){
        return (
            <div className="vt-header" style={this.props.style}>
            {this.props.children}
            </div>
        );
    }
}