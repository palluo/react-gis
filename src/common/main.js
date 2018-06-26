import { getService } from 'common/utils/serviceUtil'
const initApp = () => {
    let option = {
        url:'./privilege.json'
    }
    getService(option).then((respone) => {
        console.log(respone)
    })
}

export  { initApp }