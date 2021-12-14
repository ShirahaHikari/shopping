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
            position:'relative',
            width: '600px',
            backgroundColor: 'red'
        }}>
            <div style={{
                // width:'200px',
                position:'relative',
                left: '50px',
                top: '200px',
                margin: '0 auto',
                width: '500px',
                height: '200px',
                backgroundColor: 'green',
                // display: 'flex',
                // justifyContent: 'center',
            }}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
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