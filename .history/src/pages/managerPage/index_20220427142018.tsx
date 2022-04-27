import React, { useState } from 'react'
import { Menu, Button, message, Modal, Carousel, Table, Form, Input } from 'antd'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    HomeOutlined,
    CoffeeOutlined,
    ContainerOutlined,
    ClearOutlined,
    SkinOutlined,
    MailOutlined,
} from '@ant-design/icons';
import styles from './index.less'
import axios from 'axios'
const { SubMenu } = Menu
class ManagerHome extends React.Component<any, any> {
    constructor(a: any) {
        super(a)
        this.state = {
            userInfo: [],
            columns: [{
                title: '用户名称',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '用户的密码',
                dataIndex: 'password',
                key: 'password',
            },
            {
                title: '电话号码',
                dataIndex: 'telephone',
                key: 'telephone',
            },
            ],
            userData: { userName: '' },
            formFlag: false,
            onFinish: (values: any) => {
                let userInfo = window.sessionStorage.getItem('userInfo')
                let user: any
                if (userInfo == null) {
                    message.error('你没有登录！')
                    setTimeout(() => {
                        window.location.href = './ '
                    }, 1000);
                } else {
                    user = JSON.parse(userInfo ? userInfo : '')
                }
                if (values.password != values.confirmPassword) {
                    message.error('输入密码与确认密码不一致')
                    return;
                }
                axios.post('http://localhost:3000/findUserSame', values).then((res) => {
                    if (res.status === 200) {
                        message.error('用户名重复请尝试输入其他用户名')
                        return;
                    } else {
                        axios.post('http://localhost:3000/addUserInfo', values).then((res) => {
                            if (res.status === 200) {
                                message.success('用户账号新建成功')
                                this.setState({ formFlag: false })
                                axios.post('http://localhost:3000/userInfo').then((tmp) => {
                                    if (tmp.status === 200) {
                                        let res1 = tmp.data[0]
                                        this.setState({ userInfo: res1 })
                                    }
                                }).catch((err) => {
                                    message.error('因服务器原因无法获取用户账号！')
                                })
                            }
                        }).catch((err) => {
                            message.error('因服务器原因无法新建用户账号')
                        })
                    }
                }).catch((err) => {
                    message.error('服务器原因无法校验用户名')
                })
            }
        }
    }
    componentWillMount() { }
    componentDidMount() {
        let userInfo = window.sessionStorage.getItem('userInfo')
        let user
        if (userInfo == null) {
            message.error('你没有登录！')
            setTimeout(() => {
                window.location.href = './ '
            }, 1000);
        } else {
            user = JSON.parse(userInfo ? userInfo : '')
        }
        const userData = { userName: user.username }
        axios.post('http://localhost:3000/userInfo', {}).then((res) => {
            if (res.status === 200) {
                this.setState({ userInfo: res.data[0] })
            }
        }).catch((err) => {
            message.error('因服务器原因无法获得购物车清单！')
        })
    }


    render() {
        return (
            <div>
                <div className={styles.menu} id='top'>
                    <Menu selectedKeys={['userInfo']} mode="horizontal" >
                        <Menu.Item key="userInfo" icon={<MailOutlined />} style={{ width: 150, marginLeft: '500px' }} >
                            <a onClick={() => { window.location.href = '/home' }}>
                                用户个人信息
                            </a>
                        </Menu.Item>
                        <Menu.Item key="userShop" icon={<MailOutlined />} style={{ width: 150 }}>
                            <a href="/managerUserShop">用户的购物信息</a>
                        </Menu.Item>
                        <Menu.Item key="userAdvise" icon={<MailOutlined />} style={{ width: 150 }}>
                            <a href="/managerUserAdvise">用户的评价消息</a>
                        </Menu.Item>
                        <Menu.Item key="logOut" icon={<ClearOutlined />} style={{ width: 150 }}>
                            <a onClick={() => {
                                window.sessionStorage.removeItem('userInfo')
                                window.location.href = '/'
                            }}>
                                账号登出
                            </a>
                        </Menu.Item>
                    </Menu>
                </div>
                <Button type='primary' onClick={() => {
                    this.setState({ formFlag: true })
                }}>新建用户</Button>
                {this.state.formFlag &&
                    <Form
                        style={{ marginTop: 5 }}
                        name="basic"
                        labelCol={{ span: 7 }}
                        wrapperCol={{ span: 7 }}
                        initialValues={{ remember: true }}
                        onFinish={this.state.onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="用户名"
                            name="name"
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
                            <Button onClick={() => {
                                this.setState({ formFlag: false })
                            }} style={{ left: '20px' }}>
                                取消
                            </Button>
                        </Form.Item>
                    </Form>
                }
                <Table columns={this.state.columns} dataSource={this.state.userInfo}></Table>
            </div >
        )
    }
}
export default ManagerHome;