import React from 'react'
export default function (loadable) {
    return [{
        name: 'main',
        path:'/main',
        exact: true,
        component: loadable({
            loader:() => import('containers/Main/Main'),
            loading:() => <div/>
        })
    }]

}