import { createLoadableComp } from 'common/utils/containerUtil'
import ReactDom from 'react-dom'



 const addContainer = (url) => {
    var arrConfig = [
        {
            name:'登录',
            uid:'11',
            url:'Login/Login'
        }
    ]
    var container = document.getElementById('container')
    //let itemConfig =  arrConfig.find((item) => item.url === url)
    let itemConfig = {
        name:'登录',
        uid:'11',
        url:'./widgets/Login/Login'
    }
    let component = createLoadableComp(url)
    //let dom = ReactDom.findDOMNode(component)
    //ReactDom.render(component, container)
    return {
        type: 'ADD_CONTAINER',
        uid: itemConfig.uid,
        name: itemConfig.name,
        component: component
    }
    
}
export {addContainer}