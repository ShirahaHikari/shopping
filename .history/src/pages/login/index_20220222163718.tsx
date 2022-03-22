import { Form, Input, Checkbox, Button, message } from 'antd';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import React from 'react';
import loginPage from './index.css'
import axios from 'axios'
import { useModel } from 'umi';
// TODO: 登录权鉴


const LoginPage = () => {
    const { user, setUserData } = useModel('user') 
    const {initialState,setInitialState} = useModel('@@initialState')
    const onFinish = (values: any) => {
        axios.post('http://localhost:3000/loginUser',values).then(function(res){
            if(res.status === 200){
                if(res.data === 'success'){
                    message.success('登录成功')
                    setInitialState(values)
                    console.log(values)
                    window.location.href = '/home'
                }else{
                    message.error('用户名不存在或密码错误')
                    return
                }   
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
            left: '100px',
            top: '300px',
            position: 'relative',
            width:' 1000px ',
        }}>
            <div style={{
                // left: '50%',
                position: 'absolute',
                left: '720px',
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

                    <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)