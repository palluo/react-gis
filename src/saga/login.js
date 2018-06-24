import { API } from 'common/config'
import { getService } from 'common/utils/serviceUtil'
import { call, put, select, take, fork} from 'redux-saga/effects'
import { loginSuccee } from 'actions/login'
import createBrowserHistory from 'history/createBrowserHistory'
import { watch } from 'fs';

const history = createBrowserHistory()

function* login(userName, password, onSuccess) {
    let encryptionPassword = yield call(getLoginEncryption, password)
    let obj = {
        loginName:userName,
        password:encryptionPassword,
    }
    let userInfo = yield call (logincheck, obj)
    if (userInfo) {
        yield call (onSuccess)
        //history.push('/main')
        //yield put(loginSuccee(userInfo))
    } 
}

function* getLoginEncryption  (password)  {
    let obj = {
        url: API.loginEncryption+password,
        serviceName: '获取加密密码',
        method: 'get'
    }
    let response = yield call (getService, obj)
    if (response.code === 200) {
        let encryptionPassword = response.data
        return encryptionPassword
    }
}


function* logincheck (data)  {
    let obj = {
        url: API.loginControllerLogin,
        serviceName: '获取加密密码',
        method: 'post',
        data:data
    }
    let response =  yield call (getService, obj)
    if (response.code === 200) {
        return response.data
    }else{
        return null
    }
}

export function* watchLogin() {
    while (true) {
        const action = yield take('LOGIN')
        yield fork(login, action.userName, action.password, action.onSuccess)
    }
}

export function* watchMap() {
    while (true) {
        const action = yield take('CREATE_MAP')
    }
}
