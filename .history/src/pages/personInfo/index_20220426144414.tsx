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
class PersonalInfo extends React.Component<any, any> {
    constructor(a: any) {
        super(a)
        this.state = {
            dataShop: [],
            userAdvise: [],
            formFlag: false,
            columnsAdvise: [{
                title: '用户名称',
                dataIndex: 'name',
                key: 'name',
                render: (record: any) =>
                    <img src={record} alt="" width='200px' />
            }, {
                title: '评论内容',
                dataIndex: 'advise',
                key: 'advise',
                render: (record: any) =>
                    <img src={record} alt="" width='200px' />
            }, {
                title: '评论时间',
                dataIndex: 'date',
                key: 'date',
                render: (record: any) =>
                    <img src={record} alt="" width='200px' />
            },],
            columns: [{
                title: '商品图片',
                dataIndex: 'img',
                key: 'img',
                render: (record: any) =>
                    <img src={record} alt="" width='200px' />
            }, {
                title: '购买的商品名称',
                dataIndex: 'item',
                key: 'item',
                render: (record: any) =>
                    <div style={{ fontSize: 20 }}>{record}</div>
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
            {
                title: '',
                dataIndex: 'operation',
                key: 'operation',
                render: (text: any, record: any) =>
                    <a onClick={() => {
                        let params = { id: record.id }
                        axios.post('http://localhost:3000/deleteUserShop', params).then((res) => {
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
                                axios.post('http://localhost:3000/getUserShop', userData).then((res) => {
                                    if (res.status === 200) {
                                        let res1 = res.data[0].map((index: any) => {
                                            let tmp = {
                                                item: index.item,
                                                count: index.count,
                                                price: index.price,
                                                priceSum: index.priceSum,
                                                img: index.img,
                                                id: index._id,
                                            }
                                            return tmp;
                                        })
                                        this.setState({ dataShop: res1 })
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
        this.setState({ userData: userData })
        console.log('userName is ', this.state.userName)
        axios.post('http://localhost:3000/getUserShop', userData).then((res) => {
            if (res.status === 200) {
                let res1 = res.data[0].map((index: any) => {
                    let tmp = {
                        item: index.item,
                        count: index.count,
                        price: index.price,
                        priceSum: index.priceSum,
                        img: index.img,
                        id: index._id,
                    }
                    return tmp;
                })
                this.setState({ dataShop: res1 })
            }
        }).catch((err) => {
            message.error('因服务器原因无法获得购物车清单！')
        })
        axios.get('http://localhost:3000/getUserAdvise').then((res) => {
            if (res.status === 200) {
                let res1 = res.data[0]
                this.setState({ userAdvise: res1 })
            }
        }).catch((err) => {
            message.error('因服务器原因无法获得购物车清单！')
        })
    }


    render() {
        return (
            <div>
                <div className={styles.menu} id='top'>
                    <Menu selectedKeys={['mail']} mode="horizontal" >
                        <Menu.Item key="home" icon={<HomeOutlined />} style={{ width: 150, marginLeft: '300px' }} >
                            <a onClick={() => { window.location.href = '/home' }}>
                                首页
                            </a>
                        </Menu.Item>
                        <SubMenu key="computer" icon={<DesktopOutlined />} title="电脑" style={{ width: 150 }}>
                            <Menu.ItemGroup>
                                <Menu.Item key="noteBook">
                                    <a onClick={() => { window.location.href = '/computer/noteBook' }}>
                                        笔记本电脑
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="deskTop">
                                    <a onClick={() => { window.location.href = '/computer/deskTop' }}>
                                        台式电脑
                                    </a>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu key="food" icon={<CoffeeOutlined />} title="美食" style={{ width: 150 }}>
                            <Menu.ItemGroup>
                                <Menu.Item key="snack">
                                    <a onClick={() => { window.location.href = '/food/snack' }}>
                                        零食
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="seafood">
                                    <a onClick={() => { window.location.href = '/food/seafood' }}>
                                        生鲜
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="beer">
                                    <a onClick={() => { window.location.href = '/food/beer' }}>
                                        啤酒
                                    </a>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu key="clothes" icon={<SkinOutlined />} title="服饰" style={{ width: 150 }}>
                            <Menu.ItemGroup>
                                <Menu.Item key="jacket" style={{ width: 100 }}>
                                    <a onClick={() => { window.location.href = '/clothes/jacket' }}>
                                        上衣
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="pants">
                                    <a onClick={() => { window.location.href = '/clothes/pants' }}>
                                        裤子
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="socks">
                                    <a onClick={() => { window.location.href = '/clothes/socks' }}>
                                        袜子
                                    </a>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="mail" icon={<MailOutlined />} style={{ width: 150 }}>
                            <a href="/mail">个人信息</a>
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
                <Button onClick={() => {

                }}>新增评论</Button>
                {this.state.formFlag &&
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
                            label="建议"
                            name="advise"
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
                }
                <Table columns={this.state.columnsAdvise}></Table>
            </div >
        )
    }
}
export default PersonalInfo;