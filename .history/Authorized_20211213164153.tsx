import React from 'react'
const { Redirect } = require('dva').router

const AuthRouter = (props:any) => {
    const isLogin = window.localStorage.getItem('user')?true:false;
    return (
        isLogin?<div>{props.children}:<Redirect to='/' /></div>
    )
}