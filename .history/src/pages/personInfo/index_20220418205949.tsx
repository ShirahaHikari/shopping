import React from 'react'
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
const PersonalInfo = () => {
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
    const userData = {
        userName: user?.username
    }
    let dataShop:any;
    console.log("userData is ",userData)
    axios.post('http://localhost:3000/getUserShop', userData).then(function (res) {
        if (res.status === 200) {
            dataShop = res.data;
            console.log("dataShop is", dataShop)
        }
    }).catch((err) => {
        message.error('因服务器原因无法获得购物车清单！')
    })
    let dataSource = dataShop?.map((index:any)=>{
        let res = {
            item:'',
            count: 0,
            price: 0,
        }
        res.item = index.item
        res.count = index.count
        res.price = index.price
        return res;
    })
    const columns:any = [{
        title:'购买的商品名称',
        dataIndex:'item',
        key:'item',
        render:(text:any)=><div>{text}</div>,
    },
    {
        title:'购买的价格单总价',
        dataIndex:'price',
        key:'price',
        render:(text:any)=><div>{text}</div>,
    },
    {
        title:'购买的数量',
        dataIndex:'count',
        key:'count',
        render:(text:any)=><div>{text}</div>,
    },
]
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
                        你好！{user?.username ? user.username : ''}
                    </Menu.Item>
                </Menu>
            </div>
            <Table columns={columns} dataSource={dataSource}></Table>
        </div>
    )
}
export default PersonalInfo;