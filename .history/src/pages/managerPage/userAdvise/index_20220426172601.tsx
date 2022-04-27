import React, { useState } from 'react'
import { Menu, Button, message, Modal, Carousel, Table } from 'antd'
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
class ManagerUserAdvise extends React.Component<any, any> {
    constructor(a: any) {
        super(a)
        this.state = {
            userAdvise: [],
            columns: [{
                title: '用户名称',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '用户的评论消息',
                dataIndex: 'advise',
                key: 'advise',
            },
            {
                title: '用户评论的时间',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: '',
                dataIndex: 'operation',
                key: 'operation',
                render: (text: any, record: any) =>
                    <a onClick={() => {
                        let params = { id: record.id }
                        axios.post('http://localhost:3000/deleteUserAdvise', params).then((res) => {
                            if (res.status === 200) {
                                console.log("record.id is" + record.id)
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
                                message.success('删除成功！')
                                axios.get('http://localhost:3000/getUserAdvise').then((res) => {
                                    if (res.status === 200) {
                                        this.setState({ userAdvise: res.data[0] })
                                    }
                                }).catch((err) => {
                                    message.error('因服务器原因无法获得购物车清单！')
                                })
                            }
                        })
                    }}>删除</a>
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
        axios.get('http://localhost:3000/getUserAdvise',{}).then((res) => {
            if (res.status === 200) {
                this.setState({ userAdvise: res.data[0] })
            }
        }).catch((err) => {
            message.error('因服务器原因无法获得用户评论消息！')
        })
    }


    render() {
        return (
            <div>
                <div className={styles.menu} id='top'>
                    <Menu selectedKeys={['userAdvise']} mode="horizontal" >
                        <Menu.Item key="userInfo" icon={<MailOutlined />} style={{ width: 150, marginLeft: '500px' }} >
                            <a onClick={() => { window.location.href = '/managerHome' }}>
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
                <Table columns={this.state.columns} dataSource={this.state.userAdvise}></Table>
            </div >
        )
    }
}
export default ManagerUserAdvise;