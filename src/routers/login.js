import React from 'react'
export default function (loadable) {
    return [{
        name: 'login',
        path:'/',
        exact: true,
        component: loadable({
            loader:() => import('containers/login/login'),
            loading:() => <div/>
        })
    }]

}