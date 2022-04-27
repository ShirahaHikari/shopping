import { Form, Input, Checkbox, Button, message } from 'antd';
import Dispatch from 'redux';
import connect from 'dva';
import React from 'react';
import loginPage from './index.css'
import axios from 'axios'
const LoginPage = () => {
    const onFinish = (values: any) => {
        if (values.password != values.confirmPassword) {
            message.error('输入密码与确认密码不一致')
            return;
        }
        axios.post('http://localhost:3000/findRegisterSame', values).then(function (res) {
            if (res.data === 'same') {
                message.error('用户名已存在请尝试输入其他用户名')
            } else {
                axios.post('http://localhost:3000/registerUser', values).then(function (res) {
                    if (res.status === 200) {
                        message.success('注册成功')
                        window.location.href = '/'
                    }
                }).catch((err) => {
                    message.error('因服务器原因注册失败')
                })
            }
        }).catch((err) => {
            message.error('因服务器原因用户校验失败')
        })
    }
    // TODO: 邮箱校验
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }
    return (
        <div style={{
            top: '300px',
            left: '100px',
            position: 'relative',
            width: ' 1000px ',
        }}>
            <div style={{
                // left: '50%',
                position: 'absolute',
                left: '720px',
                top: '-40px',
                fontSize: '20px',
            }}>注册</div>
            <div style={{
                // left: '50%',
                position: 'absolute',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Form
                    name="basic"
                    labelCol={{ span: 13 }}
                    wrapperCol={{ span: 10 }}
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

                    <Form.Item
                        label="确认密码"
                        name="confirmPassword"
                        rules={[{ required: true, message: '请输入你的密码！' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="电话"
                        name="telephone"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 15, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                        <Button type="primary" onClick={() => {
                            window.location.href = '/'
                        }} style={{ left: '20px' }}>
                            已有账号，前去登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
export default LoginPage;