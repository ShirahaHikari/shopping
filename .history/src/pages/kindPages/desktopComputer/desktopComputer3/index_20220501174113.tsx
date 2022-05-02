import { Menu, message, Modal } from 'antd'
import { useState } from 'react'
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
import axios from 'axios'
import styles from './index.less'

let userInfo = window.sessionStorage.getItem('userInfo')
console.log(userInfo)
const { SubMenu } = Menu
const Beer1 = () => {
    let user
    if (userInfo == null) {
        message.error('你没有登录！')
        setTimeout(() => {
            window.location.href = './ '
        }, 1000);
    } else {
        user = JSON.parse(userInfo ? userInfo : '')
    }
    let [count, setCount] = useState(1);
    let userShop = {
        userName: user?.username,
        item: '酷耶 英特尔酷睿i5/i7四核商务办公电脑赛扬双核 台式电脑主机组装机整机台式机税控迷你主机',
        priceSum: Math.floor(count*998*1000)/1000,
        count: count,
        price: 998,
        img:'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/114749949/O1CN01O5j7sn2NMhCMCrwEF_!!0-saturn_solar.jpg_580x580Q90.jpg_.webpp'
    }
    function add() {
        setCount(count + 1)
    }
    function sub() {
        setCount(count - 1)
    }
    function buy() {
        Modal.confirm({
            title: `确定要直接购买吗,价格${Math.floor(count*998*1000)/1000}元`,
            content: '',
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                message.success('购买成功')
                setTimeout(() => {
                    window.location.reload()
                }, 1500);
            },
            onCancel: () => {}
        })
    }
    function addShopCar() {
        Modal.confirm({
            title: '确定要加入购物车吗',
            content: '',
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                console.log(userShop)
                axios.post('http://localhost:3000/addShop', userShop).then(function (res) {
                    if (res.status === 200) {
                        message.success('加入购物车成功！')
                    }
                }).catch((err) => {
                    message.error('因服务器原因加入购物车失败！')
                })
            },
            onCancel: () => {}
        })
    }
    return (
        <div style={{ backgroundColor: 'rgb(234,232,235)', width: '100%', height: '600px' }}>
            <div>
                <div className={styles.menu} id='top'>
                    <Menu mode="horizontal" selectedKeys={['computer']}>
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
            </div>
            <div className={styles.itemDetail}>
                <div className={styles.picLeft}>
                    <img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/114749949/O1CN01O5j7sn2NMhCMCrwEF_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' style={{ width: 300, height: 300 }} alt="" />
                </div>
                <div className={styles.wordRight}>
                    <h2 style={{ marginTop: 30 }}>酷耶 英特尔酷睿i5/i7四核商务办公电脑赛扬双核 台式电脑主机组装机整机台式机税控迷你主机</h2>
                    <div style={{ backgroundColor: 'rgb(255,242,232' }}>
                        <span>价格   </span>
                        <span style={{ color: 'rgb(255,68,0)', fontSize: '30px', marginLeft: 23, fontWeight: 'bold' }}>￥998.00</span>
                    </div>
                    <div style={{ width: 400, marginTop: 20 }}>数量
                        <button onClick={sub} style={{ marginLeft: 20, marginRight: 20 }}>-</button>
                        <input className={styles.count} value={count} onChange={(e)=>{setCount(Number(e.target.value))}}/>
                        <button onClick={add} style={{ marginLeft: 20 }}>+</button>
                    </div>
                    <button style={{ backgroundColor: 'rgb(255,228,208)', color: 'rgb(229,81,29)', marginTop: 20, width: 130, height: 40 }} onClick={buy}>立即购买</button>
                    <button style={{ backgroundColor: 'rgb(255,68,0)', color: 'white', marginLeft: 20, width: 160, height: 40 }} onClick={addShopCar}>加入购物车</button>
                    <div style={{ marginTop: 20 }}>
                        <span>承诺</span>
                        <span style={{ marginLeft: 40 }}>7天无理由</span>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <span>支付</span>
                        <span style={{ marginLeft: 40 }}>支付宝</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Beer1;