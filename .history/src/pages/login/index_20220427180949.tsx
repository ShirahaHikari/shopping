import { Form, Input, Checkbox, Button, message } from 'antd';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import React from 'react';
import loginPage from './index.css'
import axios from 'axios'
import { useModel } from 'umi';


const LoginPage = () => {
    const { user, setUserData } = useModel('user')
    const { initialState, setInitialState } = useModel('@@initialState')
    const onFinish = (values: any) => {
        axios.post('http://localhost:3000/loginUser', values).then(function (res) {
            if (res.status === 200) {
                if (res.data === 'success') {
                    message.success('登录成功')
                    setInitialState({ userName: values.username })
                    setUserData(values.username, values.password)
                    window.sessionStorage.setItem('userInfo', JSON.stringify(values))
                    axios.post('http://localhost:3000/user', values)
                    window.location.href = '/home'
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
            width:'3000px',
            height:'1000px',
            backgroundImage: `url('https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E7%81%B0%E7%99%BD%E4%B8%BB%E9%A2%98%E8%83%8C%E6%99%AF&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2438028623,1400984845&os=2364156076,2659575621&simid=3540835379,450242723&pn=46&rn=1&di=7077213605308923905&ln=1846&fr=&fmq=1651053994892_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fimg.redocn.com%252Fsheji%252F20150731%252Fhuibaisekuaishipinsucai_4753450.jpg%26refer%3Dhttp%253A%252F%252Fimg.redocn.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Dauto%3Fsec%3D1653645996%26t%3D62502bea9cdcfad28602aa217172d8ec&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwzLDEsNiw0LDUsNyw4LDIsOQ%3D%3D')`,
            backgroundRepeat:'no-repeat'
            }}>
            <div style={{
                left: '100px',
                top: '300px',
                position: 'relative',
                width: ' 1000px ',
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
                                    window.location.href = '/managerLogin'
                                }}
                            >
                                我是管理员
                            </Button>
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