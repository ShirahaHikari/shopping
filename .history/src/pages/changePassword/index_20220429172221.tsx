import { Form, Input, Checkbox, Button, message } from 'antd';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import React,{useState} from 'react';
import loginPage from './index.css'
import axios from 'axios'
import { useModel } from 'umi';


const LoginPage = () => {
    const { user, setUserData } = useModel('user')
    const [ count, setCount] = useState(0)
    const { initialState, setInitialState } = useModel('@@initialState')
    const onFinish = (values: any) => {
        axios.post('http://localhost:3000/changePassword', values).then(function (res) {
            if (res.status === 200) {
                if (res.data === 'success') {
                    message.success('修改密码成功')
                    setTimeout(() => {
                        window.location.href = '/'
                    }, 500);
                } else {
                    setCount(count+1)
                    message.error('用户名不存在')
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
            width:'1704px',
            height:'916px',
            backgroundImage: `url('https://img1.baidu.com/it/u=3394720900,4045595376&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=167')`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'100% 100%',
            backgroundAttachment:'fixed',
            }}>
            <div style={{
                left: '100px',
                top: '350px',
                position: 'relative',
                width: ' 1000px ',
            }}>
                <h1 style={{
                    // left: '50%',
                    position: 'absolute',
                    left: '640px',
                    top: '-100px',
                    // fontSize: '20px',
                }}>毕业设计电商平台</h1>
                <div style={{
                    // left: '50%',
                    position: 'absolute',
                    left: '720px',
                    top: '-40px',
                    fontSize: '20px',
                }}>修改密码</div>
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

                        <Form.Item wrapperCol={{ offset: 15, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                            <Button type="primary" style={{ left: '20px' }}
                                onClick={function () {
                                    window.location.href = '/'
                                }}
                            >
                                想起密码，去登录
                            </Button>
                            {count === 3 && <a style={{marginLeft:'30px'}} onClick={()=>{
                                window.location.href = '/changePassword'
                            }}>忘记密码？</a>}
                        </Form.Item>
                    </Form>
                </div>
            </div></div>

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