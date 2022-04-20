import React from 'react'
import { message } from 'antd'

const PersonalInfo = () => {
    let userInfo = window.sessionStorage.getItem('userInfo')
    let user
    console.log('userInfo is:'+ userInfo)
    if(userInfo == null){
        message.error('你没有登录！')
        setTimeout(() => {
            window.location.href = './ '
        }, 1000);
    }else{
        user = JSON.parse(userInfo?userInfo:'')
    }
    return(
        <h2>你好！{user?.username?user.username:''}</h2>
    )
}
export default PersonalInfo;