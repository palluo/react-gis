import React from 'react'
import Loading from 'widgets/loading/loading'
export default function (loadable) {
    return [{
        name: 'main',
        path:'/main',
        exact: true,
        component: loadable({
            loader:() => import('widgets/main/main'),
            loading: Loading
        })
    }]

}