

export const LOGIN_SUCCEE = 'LOGIN_SUCCEE'
export const LOGIN = 'LOGIN'

export function loginSuccee(userInfo) {
    return {
        type:LOGIN_SUCCEE,
        userInfo:userInfo
    }
}
export function login(userName, password) {
   return {
       type: LOGIN,
       userName:userName,
       password:password,
   }
}
