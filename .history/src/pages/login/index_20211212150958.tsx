import { Form, Input, Checkbox, Button, message } from 'antd';
import Dispatch from 'redux';
import connect from 'dva';
import React from 'react';
import loginPage from './index.css'
import axios from 'axios'
const LoginPage = () => {
    const onFinish = (values: any) => {
        values = JSON.stringify(values);
        axios.post('http://localhost:3000/loginUser',values).then(function(res){
            if(res.status === 200){
                message.success(res.data)
                window.location.href = '/home'
            }
        }).catch((err)=>{
            message.error('传输失败')
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

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                        <Button type="primary" htmlType="submit" style={{left:'30px'}}>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
export default LoginPage;