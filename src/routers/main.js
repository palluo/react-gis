import React from 'react'
import Loading from 'containers/loading/loading'
export default function (loadable) {
    return [{
        name: 'main',
        path:'/main',
        exact: true,
        component: loadable({
            loader:() => import('containers/main/main'),
            loading: Loading
        })
    }]

}