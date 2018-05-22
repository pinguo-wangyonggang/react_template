import React, {Component} from 'react';

import './footer.css';

export default class Footer extends Component{
    render(){
        return (
            <div className="vt-footer">
            {this.props.children}
            </div>
        );
    }
}