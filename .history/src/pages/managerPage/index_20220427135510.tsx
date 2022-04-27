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
            dataShop: [],
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
        axios.post('http://localhost:3000/userInfo',{}).then((res) => {
            if (res.status === 200) {
                this.setState({ dataShop: res.data[0] })
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
                <Button type='primary' style={{float:'left'}}>新建用户</Button>
                {this.state.formFlag &&
                    <Form
                        name="basic"
                        labelCol={{ span: 7 }}
                        wrapperCol={{ span: 10 }}
                        initialValues={{ remember: true }}
                        onFinish={this.state.onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="你的建议"
                            name="advise"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                            <Button
                                onClick={function () {
                                }}
                            >
                                取消
                            </Button>
                            <Button type="primary" htmlType="submit" style={{ left: 10 }}>
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                }
                <Table columns={this.state.columns} dataSource={this.state.dataShop}></Table>
            </div >
        )
    }
}
export default ManagerHome;