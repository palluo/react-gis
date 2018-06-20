import axios from 'axios'
import lodash from 'lodash'

const getServiceByMethod = (options) => {
    let method = options.method || 'get', cloneData = lodash.cloneDeep(options.data), url = options.url || ''
    if (url.indexOf('//') === -1) {
        return;
    }
    switch (method) {
        case 'get':
            return axios.get(url, {
                params: cloneData
            })
        case 'post':
            return axios.post(url, cloneData)
        case 'delete':
            return axios.delete(url, {
                data: cloneData
            })
        case 'put':
            return axios.put(url, cloneData)
        default: return 'null'

    }
}
export const getService = (options) => {
    if (options) {
        let serviceName = options.serviceName || '未知服务', url = options.url || ''
        return getServiceByMethod(options).then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data)
            }
        }, (err) => {
            let service = '调用:(' + serviceName + ')服务失败' + url
            let obj = {
                service: service,
                message: err.message
            }
            return Promise.reject(obj)
        }).catch((err) => {
            let service = '调用:(' + serviceName + ')服务异常' + url
            let obj = {
                service: service,
                message: err.message
            }
            return Promise.reject(obj)
        })
    }
}
