export const GET_USER_INFO_REQ = "userInfo/request";
export const GET_USER_INFO_SUC = "userInfo/success";
export const GET_USER_INFO_FAL = "userInfo/failed";

function getUserInfoReq()
{
    return {
        type:GET_USER_INFO_REQ
    }
}

function getUserInfoSuc(userInfo) {
  return {
    type: GET_USER_INFO_SUC,
    userInfo: userInfo
  };
}

function getUserInfoFal() {
  return {
    type: GET_USER_INFO_FAL
  };
}

export function getUserInfo()
{
    return function(dispatch){
        dispatch(getUserInfoReq());
        return fetch('http://localhost:8081/api/user.json').then(
            (response => {
                return response.json()
            })
        ).then((json) =>{
            dispatch(getUserInfoSuc(json))
        }).catch(
            () => {
                dispatch(getUserInfoFal());
            }
        )
    }
}