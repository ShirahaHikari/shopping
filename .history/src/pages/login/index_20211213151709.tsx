import { Form, Input, Checkbox, Button, message } from 'antd';
import Dispatch from 'redux';
import connect from 'dva';
import React from 'react';
import loginPage from './index.css'
import axios from 'axios'
const LoginPage = () => {
    const onFinish = (values: any) => {
        console.log(values)
        // values = JSON.stringify(values)
        // console.log(values);
        axios.post('http://localhost:3000/loginUser',values).then(function(res){
            if(res.status === 200){
                message.success(res.data)
                // message.success('登录成功')
                // window.location.href = '/home'
            }
        }).catch((err)=>{
            message.error('因服务器原因登陆失败')
        })
    }
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }
    return (
        <div style={{
            top: '200px',
            position: 'relative',
            width:' 2000px ',
        }}>
            <div style={{
                // left: '50%',
                position: 'absolute',
                left: '700px',
                top: '-40px',
                fontSize: '20px',
            }}>登录</div>
            <div style={{
                // left: '50%',
                position: 'absolute',
                width:'100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 6 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入你的用户名！' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入你的密码！' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                        <Button type="primary" style={{left:'10px'}}
                            onClick = {function(){
                                window.location.href = '/register'
                            }}
                        >
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
export default LoginPage;