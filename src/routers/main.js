import React from 'react'
import Loading from 'containers/Loading/Loading'
export default function (loadable) {
    return [{
        name: 'main',
        path:'/main',
        exact: true,
        component: loadable({
            loader:() => import('containers/Main/Main'),
            loading: Loading
        })
    }]

}