import React, { Component } from "react";
import PhotoView from "components/PhotoView/PhotoView"

export default class Page1 extends Component {
  render() {
    const photos = [{
      url: 'http://pic.616pic.com/ys_b_img/00/66/56/wDyzYR78cD.jpg'
    }, {
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526899632497&di=0887dec94036fd311bbb5bf68c351229&imgtype=0&src=http%3A%2F%2Fwww.itsource.cn%2Fupload%2Fnews%2F2017-12-21%2F0ed59c44-f094-4903-b72c-6a6967f6ecb6.png'
    }];
    return <PhotoView currunt ={0}
    photos = {
      photos
    }
    / >
  }
}
