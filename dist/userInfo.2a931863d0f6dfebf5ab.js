webpackJsonp([1],{"1saR":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("GiK3"),l=(r=u)&&r.__esModule?r:{default:r},a=n("RH2O"),f=n("BVBi");var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){var e=this,t=this.props.userInfo,n=t.userInfo,r=t.isLoading,o=t.errorMsg;return l.default.createElement("div",null,r?"数据请求中......":o||l.default.createElement("div",null,l.default.createElement("p",null," userInfo："),l.default.createElement("p",null," name：",n.name),l.default.createElement("p",null," intro：",n.intro)),l.default.createElement("button",{onClick:function(){return e.props.getUserInfo()}},"请求用户信息"))}}]),t}();t.default=(0,a.connect)(function(e){return{userInfo:e.userInfo}},{getUserInfo:f.getUserInfo})(i)}});