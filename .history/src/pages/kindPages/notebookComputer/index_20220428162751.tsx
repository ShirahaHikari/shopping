import React, { useState, useEffect } from 'react'
import { connect } from 'dva'
import { Dispatch } from 'redux'
import axios from 'axios'
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
    SearchOutlined,
} from '@ant-design/icons';
import { useModel } from 'umi';
import styles from './index.less'

const { SubMenu } = Menu
const NoteBookComputer = (props: any) => {
    let userInfo = window.sessionStorage.getItem('userInfo')
    let user: any
    console.log('userInfo is:' + userInfo)
    if (userInfo == null) {
        message.error('你没有登录！')
        setTimeout(() => {
            window.location.href = './ '
        }, 1000);
    } else {
        user = JSON.parse(userInfo ? userInfo : '')
    }
    let [content, setContent] = useState('')
    const columns = [{
        title: '用户名称',
        dataIndex: 'name',
        key: 'name',
        render: (record: any) =>
            <img src={record} alt="" width='200px' />
    }, {
        title: '用户评论',
        dataIndex: 'advise',
        key: 'advise',
        render: (record: any) =>
            <div style={{ fontSize: 20 }}>{record}</div>
    },
    {
        title: '评论时间',
        dataIndex: 'date',
        key: 'date',
    },
    ]
    return (
        <div style={{ backgroundColor: 'rgb(234,232,235)', width: '100%', height: '1500px' }}>
            <div className={styles.menu}>
                <Menu selectedKeys={['home']} mode="horizontal" >
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
                            Modal.confirm({
                                title: '你确定要退出登录吗？',
                                onOk: () => {
                                    window.sessionStorage.removeItem('userInfo')
                                    window.location.href = '/'
                                },
                                onCancel: () => {
                                    return;
                                },
                                okText: '确认',
                                cancelText: '取消',
                            })
                        }}>
                            账号登出
                        </a>
                    </Menu.Item>
                    <Menu.Item key="input" icon={<SearchOutlined />} id='search'>
                        <input type="text" style={{ width: 100, height: 20, border: '1px solid black', color: 'black' }} value={content} onChange={(e) => {
                            setContent(e.target.value)
                        }} />
                        <span onClick={() => {
                            if (content === '蓝牙耳机') {
                                window.location.href = '/search?=blueEarphone'
                            } else if (content === '球鞋') {
                                window.location.href = '/search?=sportShoe'
                            }
                        }} style={{ marginLeft: 10 }}>搜索</span>
                    </Menu.Item>
                    <Menu.Item key='hello' disabled style={{ width: 150, left: 120 }}>
                        你好！{user?.username ? user.username : ''}
                    </Menu.Item>
                </Menu>
            </div>
            <div className={styles.mainPage} id='top'>
                <div className={styles.guessYouLikeItems}>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/notebook"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/26623201/O1CN01f15JA21ZW6YYDwSjp_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/notebook" className={styles.crossOver}><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>【爆款】asus华硕天选2游戏本11代英特尔酷睿i7/i5/RTX3050Ti笔记本电脑大学生电竞吃鸡商务办公便携15.6英寸</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥6099.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/notebook"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/489660139/O1CN01bkILGv1Ctho0erBU2_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/notebook" className={styles.crossOver}><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>【11代新品】全新款笔记本电脑办公用商务15.6英寸轻薄便携手提电脑游戏本高配高性能大学生女生款超薄超极本.0</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥1548.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/notebook"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/1299040067/O1CN01XvLOcm1CMjG5nvLlV_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/notebook"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>MFQBW 全新游戏本英特尔酷睿i7轻便超薄手提电脑轻薄便携学生女生商务办公学习游戏学生大学生笔记本电脑吃鸡</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥1398.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/notebook"><img src='https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/2838892713/O1CN014epHub1VubHPpKRUj_!!0-item_pic.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/notebook"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>华为笔记本电脑/HUAWEI MateBook 13 11代酷睿处理器16GB+512GB锐炬显卡2K护眼屏轻薄办公全面屏wifi 6</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥5199.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/notebook"><img src='https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1714128138/O1CN01yer7vZ29zFw2wS3dU_!!0-item_pic.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/notebook"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>【热销爆品】Xiaomi/RedmiBook Pro 14 11代英特尔酷睿i5/i7笔记本电脑轻薄便携学生办公商务小米官方旗舰店</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥4799.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/notebook"><img src='https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/379092568/O1CN01pBCb9I1UqBqgydyzn_!!0-item_pic.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/notebook"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>【稀缺现货】DELL/戴尔 2022新款G15 5520 12代英特尔酷睿i5游匣游戏本3070笔记本电脑3060手提15.6英寸学生</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥6899.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/notebook"><img src='https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2745641605/O1CN01nYzuR71Nj8RKNhoSz_!!0-item_pic.jpg_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/notebook"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>【24期免息】ROG幻14AMD锐龙R9/RTX3060轻薄本2.5K屏手提设计师大学生游戏笔记本电脑办公玩家国度官方旗舰店</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥9999.00</p>
                    </div>
                    <div style={{ position: 'relative', width: '300px', height: '350px' }}>
                        <a href="computer/notebook"><img src='https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/379092568/O1CN01lcKnPG1UqBqh4skUV_!!2-item_pic.png_580x580Q90.jpg_.webp' alt="" style={{ width: '250px', height: '250px', position: 'absolute', right: '0px', borderRadius: '20px' }} /></a>
                        <a href="computer/notebook"><span style={{ position: 'absolute', bottom: '50px', width: '250px', right: '0px', overflow: 'hidden', height: '40px' }}>【天猫V榜推荐】DELL/戴尔 G15 15.6英寸游匣游戏本英特尔酷睿i5灵越笔记本电脑5511学生i7电竞5510手提轻薄</span></a>
                        <p style={{ position: 'absolute', bottom: '0px', color: 'red', fontSize: '20px', left: '44px' }}>￥6399.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ homePage }: { homePage: any }) => ({
    homePage
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSaveState: (payload: any) => {
        dispatch({
            type: 'homePage/save',
            payload,
        });
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(NoteBookComputer)