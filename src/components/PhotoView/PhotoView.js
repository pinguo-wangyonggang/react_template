import React , {Component} from 'react';
import "./PhotoView.css";

export default class PhotoView extends Component{
    state = {
        currunt: this.props.currunt,
        photos: this.props.photos
    }

    handleClick(index){
        this.setState({
            currunt:index
        });
    }

    render(){
        return (
        <div className = "photo-view">
        <ul className="photo">
            {this.state.photos.map((item, index)=>{
                const classNames = this.state.currunt === index ? 'image image-selected' : 'image';
                return <img 
                    src={item.url} 
                    key={index}  className={classNames}
                />
            })}
        </ul>
        <div className="control">
            {this.state.photos.map((item, index)=>{
                const classNames = this.state.currunt === index ? 'page page-selected' : 'page';
                return <span className={classNames} onClick={(e)=>this.handleClick(index)} key={index}></span>
            })}
        </div>
        </div>
        )
    }
}
