import {
  GET_USER_INFO_REQ,
  GET_USER_INFO_SUC,
  GET_USER_INFO_FAL
} from "actions/userInfo";

const initState = {
    isLoading : false,
    userInfo: {},
    errorMsg: ''
};

export default function reducer(state = initState, action){
    switch (action.type) {
      case GET_USER_INFO_REQ:
        return {
            isLoading:true,
            userInfo:{},
            errorMsg:''
        };
      case GET_USER_INFO_SUC:
        return {  isLoading: false, userInfo: action.userInfo, errorMsg: "" };
      case GET_USER_INFO_FAL:
        return { isLoading: false, userInfo: {}, errorMsg: "请求错误" };
      default:
        return state;
    }
}