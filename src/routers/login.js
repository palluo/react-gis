import React from 'react'
export default function (loadable) {
    return [{
        name: 'login',
        path:'/',
        exact: true,
        component: loadable({
            loader:() => import('widgets/login'),
            loading:() => <div/>
        })
    }]

}