import React, {Component} from 'react';

import './menu.css';

export default class Menu extends Component{
    handleClick(e){
        
    }
    render(){
        return (
            <ul className="vt-menu" onClick={this.handleClick}>
                {this.props.children}
            </ul>
        );
    }
}