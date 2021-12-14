import { Form, Input, Checkbox, Button, AutoComplete } from 'antd';
import Dispatch from 'redux';
import connect from 'dva';
import React from 'react';
import loginPage from './index.css'
const LoginPage = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
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
                width:'100%',
                justifyContent: 'center',
                alignItems: 'center',
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
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
export default LoginPage;