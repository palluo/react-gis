import { push } from 'react-router-redux'

export const LOGIN_SUCCEE = 'LOGIN_SUCCEE'
export const LOGIN = 'LOGIN'

export function loginSuccee(userInfo) {
    // return {
    //     type:LOGIN_SUCCEE,
    //     userInfo:userInfo
    // }
}
export function login(userName, password, callBack) {
   return {
       type: LOGIN,
       userName:userName,
       password:password,
       onSuccess:callBack||null
   }
}
