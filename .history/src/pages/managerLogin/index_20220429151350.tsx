import { Form, Input, Checkbox, Button, message } from 'antd';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import React from 'react';
import loginPage from './index.css'
import axios from 'axios'
import { useModel } from 'umi';


const ManagerLoginPage = () => {
    const { user, setUserData } = useModel('user')
    const { initialState, setInitialState } = useModel('@@initialState')
    const onFinish = (values: any) => {
        if (values.keyword !== '032711') {
            message.error('管理员权钥错误！')
            return;
        }
        axios.post('http://localhost:3000/loginUser', values).then(function (res) {
            if (res.status === 200) {
                if (res.data === 'success') {
                    message.success('登录成功')
                    setInitialState({ userName: values.username })
                    setUserData(values.username, values.password)
                    window.sessionStorage.setItem('userInfo', JSON.stringify(values))
                    axios.post('http://localhost:3000/user', values)
                    window.location.href = '/managerHome'
                } else {
                    message.error('用户名不存在或密码错误')
                    return
                }
            }
        }).catch((err) => {
            message.error('因服务器原因登陆失败')
        })
    }
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }
    return (
        <div style={{
            // left: '100px',
            // top: '300px',
            position: 'relative',
            width: ' 1000px ',
        }}>
            <div style={{
                position:'absolute',
                zIndex:'-100',
                width: '1704px',
                height: '916px',
                backgroundImage: `url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_origin_min_pic%2F19%2F04%2F16%2F4c860aefeb1154d8eac41eeed61effca.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653807221&t=179624b1c0c5b0c10579ae48c5a1f950')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                backgroundAttachment: 'fixed',
            }}
            ></div>
            <div style={{
                // left: '50%',
                position: 'absolute',
                left: '720px',
                top: '100px',
                fontSize: '20px',
            }}>登录</div>
            <div style={{
                // left: '50%',
                position: 'absolute',
                width: '100%',
                left:'300px',
                top:'400px',
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
                        label="管理员权钥"
                        name="keyword"
                        rules={[{ required: true, message: '请输入管理员权钥！' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 15, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                        <Button type="primary" style={{ left: '10px' }}
                            onClick={function () {
                                window.location.href = '/register'
                            }}
                        >
                            注册
                        </Button>
                        <Button type="primary" style={{ left: '20px' }}
                            onClick={function () {
                                window.location.href = '/'
                            }}
                        >
                            我不是管理员
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
const mapStateToProps = ({ loginPage }: { loginPage: any }) => ({
    loginPage
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSaveState: (payload: any) => {
        dispatch({
            type: 'loginPage/save',
            payload,
        });
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(ManagerLoginPage)