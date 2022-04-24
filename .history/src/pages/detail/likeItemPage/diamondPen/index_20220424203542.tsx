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
const japaneseHat = () => {
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
        item: '施华洛世奇笔Swarovski水晶笔新款中性笔圆珠笔办公用品定制logo',
        priceSum: Math.floor(count*90*1000)/1000,
        count: count,
        price: 90,
        img:'data:image/webp;base64,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'
    }
    function add() {
        setCount(count + 1)
    }
    function sub() {
        setCount(count - 1)
    }
    function buy() {
        Modal.confirm({
            title: `确定要直接购买吗,价格${Math.floor(count*90*1000)/1000}元`,
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
                    <Menu mode="horizontal" >
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
                    <img src='data:image/webp;base64,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' style={{ width: 300, height: 300 }} alt="" />
                </div>
                <div className={styles.wordRight}>
                    <h2 style={{ marginTop: 30 }}>施华洛世奇笔Swarovski水晶笔新款中性笔圆珠笔办公用品定制logo</h2>
                    <div style={{ backgroundColor: 'rgb(255,242,232' }}>
                        <span>价格   </span>
                        <span style={{ color: 'rgb(255,68,0)', fontSize: '30px', marginLeft: 23, fontWeight: 'bold' }}>￥90.00</span>
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
export default japaneseHat;