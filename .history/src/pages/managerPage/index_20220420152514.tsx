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
                title: '购买的商品名称',
                dataIndex: 'item',
                key: 'item',
            },
            {
                title: '购买的数量',
                dataIndex: 'count',
                key: 'count',
            },
            {
                title: '购买的价格单总价',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: '总价',
                dataIndex: 'priceSum',
                key: 'priceSum',
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
        this.setState({ userData: userData })
        console.log('userName is ', this.state.userName)
        axios.post('http://localhost:3000/getUserShop', userData).then((res) => {
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
                        <Menu.Item key="userInfo" icon={<HomeOutlined />} style={{ width: 150, marginLeft: '500px' }} >
                            <a onClick={() => { window.location.href = '/home' }}>
                                用户个人信息
                            </a>
                        </Menu.Item>
                        <Menu.Item key="userShop" icon={<MailOutlined />} style={{ width: 150 }}>
                            <a href="/userShop">用户的购物信息</a>
                        </Menu.Item>
                        <Menu.Item key="userAdvise" icon={<MailOutlined />} style={{ width: 150 }}>
                            <a href="/userAdvise">用户的评价消息</a>
                        </Menu.Item>
                        <Menu.Item key="logOut" icon={<ClearOutlined />} style={{ width: 150 }}>
                            <a onClick={() => {
                                window.sessionStorage.removeItem('userInfo')
                                window.location.href = '/'
                            }}>
                                账号登出
                            </a>
                        </Menu.Item>
                        <Menu.Item key='hello' disabled style={{ width: 150, left: 120 }}>
                            你好！{(this.state?.userData?.userName)}
                        </Menu.Item>
                    </Menu>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.dataShop}></Table>
            </div >
        )
    }
}
export default ManagerHome;